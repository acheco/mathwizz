import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { supabase } from "../supabaseClient";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonPage,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
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
          .eq("id_contenido", idCuestionario);

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

  const handleAnswerClick = (
    preguntaId,
    respuestaId,
    esCorrecta
  ) => {
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

  return (
    <IonPage>
      <IonHeader>
        <Toolbar
          showBackButton={true}
          encabezado="CUESTIONARIO"
          avatarUrl={perfil.avatar_url}
          userName={perfil.username}

        />
      </IonHeader>

      <IonContent>
        {preguntas.map((preguntaRespuesta) => (
          <IonItemGroup key={preguntaRespuesta.id}>
            <IonItemDivider key={preguntaRespuesta.id}>
              {preguntaRespuesta.pregunta}
            </IonItemDivider>
            <IonRadioGroup
              value={respuestaSeleccionada[preguntaRespuesta.id] || null}
            >
              {preguntaRespuesta.respuestas.map((respuesta) => (
                <IonItem
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
                  <IonLabel>{respuesta.respuesta}</IonLabel>
                  {respuesta.id === respuestaSeleccionada[preguntaRespuesta.id] &&
                    (respuesta.es_correcta ? (
                      <IonIcon
                        slot="end"
                        icon={checkmarkCircleOutline}
                        color="success"
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
        ))}

        <IonButton onClick={() => {
          // Pasa la puntuación al componente CalculoPuntuacion
          history.push("/puntuacion/" + puntuacion);
        }}>Finalizar Cuestionario</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Cuestionario;
