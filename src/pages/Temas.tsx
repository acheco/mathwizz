import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/helper/supabaseClient";

const Temas: React.FC = () => {
  const [temas, setTemas] = useState<any[]>([]); // Cambia el tipo de datos según tu esquema de la tabla

  useEffect(() => {
    const fetchTemas = async () => {
      try {
        const { data, error } = await supabase
          .from("t_temas") // Nombre de la tabla
          .select("*"); // Selecciona todos los campos (puedes especificar campos específicos)

        if (error) {
          console.error(
            "Error al obtener datos de la tabla t_temas:",
            error.message
          );
          return;
        }

        // Actualiza el estado con los datos obtenidos
        setTemas(data || []);
      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
    };

    // Llama a la función de obtención de datos al cargar la app
    fetchTemas();
  }, []);

  return (
    <IonPage className="tipoLetra">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Temas</IonTitle>
          <IonAvatar slot="end">
            <IonImg src="https://www.gravatar.com/avatar?d=mp" alt="avatar" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonTitle>Seleccione un tema a estudiar</IonTitle>
        {temas.map((datosTemas) => {
          return (
            <Link key={datosTemas.f_id} to={`/subtemas/${datosTemas.f_id}`}>
              <IonButton expand="block">{datosTemas.f_nombre_tema}</IonButton>
            </Link>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default Temas;
