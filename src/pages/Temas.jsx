import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,

} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import Toolbar from "../components/Toolbar";
import "../styles/Temas.css";
import DatosPerfil from "../data/DatosUsuario";

const Temas = () => {

  const datosPerfil = DatosPerfil();
  const [temas, setTemas] = useState([]);

  useEffect(() => {

    const fetchTemas = async () => {
      try {
        const { data, error } = await supabase
          .from("t_temas") // Nombre de la tabla
          .select("*");

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
      <IonHeader class="ion-no-border">
        <Toolbar
          showBackButton={false}
          encabezado="TEMAS"
          avatarUrl={datosPerfil.avatar_url}
          userName={datosPerfil.username} />
      </IonHeader>
      <IonContent className="ion-padding">

        <h2 className="scale-up-center">SELECCIONE UN TEMA</h2>

        {temas.map((datosTemas) => {
          return (
            <Link style={{ textDecoration: "none" }} key={datosTemas.f_id} to={`/subtemas/${datosTemas.f_id}`}>
              <IonButton style={{ padding: "8px 0" }} expand="block" size="large" mode="ios">{datosTemas.f_nombre_tema}</IonButton>
            </Link>
          );
        })}
      </IonContent>
    </IonPage >
  );
};

export default Temas;
