import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { supabase } from "../supabaseClient";
import {
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonPage,
  IonRadioGroup,
  IonAlert,
} from "@ionic/react";
import { checkmarkCircleOutline, closeCircleOutline } from "ionicons/icons";
import Toolbar from "../components/Toolbar";
import DatosPerfil from "../data/DatosUsuario";

const Cuestionario = () => {
  const history = useHistory();

  const { idCuestionario } = useParams();
  const perfil = DatosPerfil();
  const [preguntas, setPreguntas] = useState([]);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState({});
  const [bloquearGrupo, setBloquearGrupo] = useState([]);
  const [puntuacion, setPuntuacion] = useState(0);
  const [showIncompleteAlert, setShowIncompleteAlert] = useState(false);

  // Consulta las preguntas del subtema seleccionado
  useEffect(() => {
    const fetchPreguntas = async () => {
      try {
        const { data, error } = await supabase
          .from("preguntas")
          .select(
            `id, pregunta
            , respuestas (id, respuesta, es_correcta)`
          )
          .eq("id_subtema", idCuestionario);

        if (error) {
          console.error(
            "Error al obtener datos de la tabla preguntas:",
            error.message
          );
          return;
        }

        setPreguntas(data || []);
      } catch (error) {
        console.error("Error al consultar las preguntas, error:", error);
      }
    };

    fetchPreguntas();
  }, [idCuestionario]);

  const handleAnswerClick = (preguntaId, respuestaId, esCorrecta) => {
    // Deshabilitar otras respuestas de la misma pregunta
    setRespuestaSeleccionada((prevRespuestaSeleccionada) => ({
      ...prevRespuestaSeleccionada,
      [preguntaId]: respuestaId,
    }));

    // Bloquear el grupo de respuestas de la misma pregunta
    if (!bloquearGrupo.includes(preguntaId)) {
      setBloquearGrupo((prevbloquearGrupo) => [
        ...prevbloquearGrupo,
        preguntaId,
      ]);
    }

    // Sumar puntuacion si la respuesta es correcta:
    if (esCorrecta) {
      setPuntuacion((prevPuntuacion) => prevPuntuacion + 1);
    }
  };

  //resetear respuestas al finalizar el cuestionario
  const resetCuestionario = () => {
    // Restablecer las respuestas seleccionadas y desbloquear los grupos
    setRespuestaSeleccionada({});
    setBloquearGrupo([]);
    setPuntuacion(0);
  };

  const finalizarCuestionario = () => {
    // Verifica si todas las preguntas se han respondido
    const preguntasSinResponder = preguntas.filter(
      (pregunta) => !respuestaSeleccionada[pregunta.id]
    );

    if (preguntasSinResponder.length > 0) {
      // Muestra una alerta si hay preguntas sin responder
      setShowIncompleteAlert(true);
    } else {
      // Si todas las preguntas están respondidas, finaliza el cuestionario
      history.push("/puntuacion/" + puntuacion);
      resetCuestionario();
    }
  };

  // insertar o actualizar el historial del cuestionario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.rpc(
      "upsert_historial_cuestionario",
      {
        user_id: supabase.auth.user().id,
        sub_tema_id: parseInt(idCuestionario),
        new_puntuacion: puntuacion,
      }
    );

    if (error) {
      console.error("Error al guardar el historial del cuestionario:", error);
    }
  };

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <Toolbar
          showBackButton={true}
          encabezado="CUESTIONARIO"
          avatarUrl={perfil.avatar_url}
          userName={perfil.username}
        />
      </IonHeader>

      <IonContent color="secondary">
        <form onSubmit={handleSubmit}>
          {preguntas.map((preguntaRespuesta) => (
            <IonCard
              key={preguntaRespuesta.id}
              style={{
                borderRadius: "10px",
                boxShadow: "20px 20px 60px #bebebe -20px -20px 60px #ffffff",
              }}
            >
              <IonItemGroup key={preguntaRespuesta.id}>
                <IonItemDivider
                  color="tertiary"
                  key={preguntaRespuesta.id}
                  style={{
                    fontSize: "1.1rem",
                    padding: "10px",
                  }}
                >
                  {preguntaRespuesta.pregunta}
                </IonItemDivider>
                <IonRadioGroup
                  value={respuestaSeleccionada[preguntaRespuesta.id] || null}
                >
                  {preguntaRespuesta.respuestas.map((respuesta) => (
                    <IonItem
                      style={{
                        opacity: 1,
                      }}
                      key={respuesta.id}
                      onClick={() =>
                        handleAnswerClick(
                          preguntaRespuesta.id,
                          respuesta.id,
                          respuesta.es_correcta
                        )
                      }
                      disabled={bloquearGrupo.includes(preguntaRespuesta.id)}
                    >
                      <p style={{ color: "#000" }}>{respuesta.respuesta}</p>
                      {respuesta.id ===
                        respuestaSeleccionada[preguntaRespuesta.id] &&
                        (respuesta.es_correcta ? (
                          <IonIcon
                            slot="end"
                            icon={checkmarkCircleOutline}
                            style={{ color: "#228b22" }}
                          />
                        ) : (
                          <IonIcon
                            slot="end"
                            icon={closeCircleOutline}
                            color="danger"
                          />
                        ))}
                    </IonItem>
                  ))}
                </IonRadioGroup>
              </IonItemGroup>
            </IonCard>
          ))}
          <div style={{ textAlign: "center", margin: "20px" }}>
            <IonButton
              type="submit"
              size="large"
              onClick={() => {
                finalizarCuestionario();
              }}
            >
              Finalizar Cuestionario
            </IonButton>
          </div>
        </form>
      </IonContent>

      {/* Alerta para preguntas incompletas */}
      <IonAlert
        isOpen={showIncompleteAlert}
        onDidDismiss={() => setShowIncompleteAlert(false)}
        header="Preguntas incompletas!"
        message="Por favor, responde todas las preguntas antes de finalizar el cuestionario."
        buttons={["OK"]}
      />
    </IonPage>
  );
};

export default Cuestionario;
