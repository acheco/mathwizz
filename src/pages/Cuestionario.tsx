import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { supabase } from "../supabaseClient";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { checkmarkCircleOutline, closeCircleOutline } from "ionicons/icons";

const Cuestionario: React.FC = () => {
  const { idCuestionario } = useParams<{ idCuestionario: string }>();

  const [preguntas, setPreguntas] = useState<any[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: string]: string | null;
  }>({});
  const [blockedGroups, setBlockedGroups] = useState<string[]>([]);

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
    preguntaId: string,
    respuestaId: string,
    esCorrecta: boolean
  ) => {
    // Deshabilitar otras respuestas de la misma pregunta
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [preguntaId]: respuestaId,
    }));

    // Bloquear el grupo de respuestas de la misma pregunta
    if (!blockedGroups.includes(preguntaId)) {
      setBlockedGroups((prevBlockedGroups) => [
        ...prevBlockedGroups,
        preguntaId,
      ]);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/contenido"></IonBackButton>
          </IonButtons>
          <IonTitle>Cuestionario</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {preguntas.map((preguntaRespuesta) => (
          <IonItemGroup key={preguntaRespuesta.id}>
            <IonItemDivider key={preguntaRespuesta.id}>
              {preguntaRespuesta.pregunta}
            </IonItemDivider>
            <IonRadioGroup
              value={selectedAnswers[preguntaRespuesta.id] || null}
            >
              {preguntaRespuesta.respuestas.map((respuesta: any) => (
                <IonItem
                  key={respuesta.id}
                  onClick={() =>
                    handleAnswerClick(
                      preguntaRespuesta.id,
                      respuesta.id,
                      respuesta.es_correcta
                    )
                  }
                  disabled={blockedGroups.includes(preguntaRespuesta.id)}
                >
                  <IonLabel>{respuesta.respuesta}</IonLabel>
                  {respuesta.id === selectedAnswers[preguntaRespuesta.id] &&
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
      </IonContent>
    </IonPage>
  );
};

export default Cuestionario;
