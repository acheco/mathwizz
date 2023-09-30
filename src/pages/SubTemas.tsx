import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { supabase } from "../lib/helper/supabaseClient";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SubTemas: React.FC = () => {
  const { idTema } = useParams<{ idTema: string }>();
  const [subTemas, setSubTemas] = useState<any[]>([]); // Cambia el tipo de datos según tu esquema de la tabla

  useEffect(() => {
    const fetchSubTemas = async () => {
      try {
        const { data, error } = await supabase
          .from("t_sub_temas") // Nombre de la tabla
          .select("*") // Selecciona todos los campos (puedes especificar campos específicos)
          .eq("f_id_tema", idTema);

        if (error) {
          console.error(
            "Error al obtener datos de la tabla t_sub_temas:",
            error.message
          );
          return;
        }

        // Actualiza el estado con los datos obtenidos
        setSubTemas(data || []);
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };

    // Llama a la función de obtención de datos al cargar la app
    fetchSubTemas();
  }, []);

  return (
    <IonPage className="tipoLetra">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/subtemas"></IonBackButton>
          </IonButtons>
          <IonTitle>Sub Temas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonTitle>Seleccione un Sub tema a estudiar</IonTitle>
        {subTemas.map((datosSubTemas) => (
          <Link
            key={datosSubTemas.f_id}
            to={`/contenido/${datosSubTemas.f_id}`}
          >
            <IonButton expand="block">
              {datosSubTemas.f_nombre_subtema}
            </IonButton>
          </Link>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default SubTemas;
