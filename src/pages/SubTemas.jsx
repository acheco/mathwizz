import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Toolbar from "../components/Toolbar";
import DatosPerfil from "../data/DatosUsuario";

const SubTemas = () => {

  const perfil = DatosPerfil();

  const { idTema } = useParams();
  const [subTemas, setSubTemas] = useState([]);
  const [temas, setTemas] = useState([]);

  useEffect(() => {
    const fetchSubTemas = async () => {
      try {
        const { data, error } = await supabase
          .from("t_sub_temas")
          .select("*")
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

  // llamar los datos de la tabla temas

  useEffect(() => {
    const fetchTemas = async () => {
      try {
        const { data, error } = await supabase
          .from("t_temas")
          .select("*")
          .eq("f_id", idTema);
        if (error) {
          console.error(
            "Error al obtener datos de la tabla t_temas:",
            error.message
          );
          return;
        }
        setTemas(data || []);

      } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }

    };
    fetchTemas();
  }, []);

  const tema = temas[0];

  return (
    <IonPage className="tipoLetra">
      <IonHeader class="ion-no-border">
        <Toolbar
          showBackButton={true}
          encabezado="SUB TEMAS"
          avatarUrl={perfil.avatar_url}
          userName={perfil.username}

        />
      </IonHeader>

      <IonContent className="ion-padding">
        <h2 style={{
          fontWeight: "bold",
          margin: "20px auto 20px auto",
          textAlign: "center",
        }}>
          SELECCIONE UN SUB TEMA DE {tema?.f_nombre_tema.toUpperCase()}
        </h2>

        {subTemas.map((datosSubTemas) => (
          <Link
            style={{ textDecoration: "none" }}
            key={datosSubTemas.f_id}
            to={`/contenido/${datosSubTemas.f_id}`}
          >
            <IonButton color="success" className="ion-text-wrap" style={{ padding: "8px 0" }} expand="block" size="large" mode="ios">
              {datosSubTemas.f_nombre_subtema}
            </IonButton>
          </Link>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default SubTemas;
