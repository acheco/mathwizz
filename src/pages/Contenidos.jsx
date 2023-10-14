/*
import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonText
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";
import Toolbar from "../components/Toolbar";
import DatosPerfil from "../data/DatosUsuario";

const Contenido = () => {

  const perfil = DatosPerfil();
  const { idSubTema } = useParams();
  const [contenidoSubtema, setContenidoSubtema] = useState([]); // Cambia el tipo de datos según tu esquema de la tabla
  const [subTemas, setSubTemas] = useState([]);

  //-- CONSULTA PARA EL CONTENIDO DE LOS SUBTEMAS --//

  useEffect(() => {
    async function fetchContenidoSubtema() {
      try {
        const { data, error } = await supabase
          .from("t_contenido_subtema")
          .select("*")
          .eq("f_id_subtema", idSubTema);
        if (error) console.log("error", error);
        else setContenidoSubtema(data);
      } catch (error) {
        console.log("Error fetching content:", error);
      }
    }
    fetchContenidoSubtema();
  }, [idSubTema]);


  //-- MOSTRAR TITULO DE LOS SUBTEMAS --//
  useEffect(() => {
    async function fetchContenidoSubtema() {
      try {
        const { data, error } = await supabase
          .from("t_sub_temas")
          .select("f_id, f_nombre_subtema")
          .eq("f_id", idSubTema);
        if (error) console.log("error", error);
        else setSubTemas(data);
      } catch (error) {
        console.log("Error fetching content:", error);
      }
    }
    fetchContenidoSubtema();
  }, [idSubTema]);

  const tituloSubTema = subTemas[0];

  let content;

  contenidoSubtema.map((datosContenidoSubtema) => {
    if (datosContenidoSubtema.f_tipo === "parrafo") {
      content = (
        <IonContent className="ion-padding" >
          <h2 style={{ textAlign: "center" }}>{tituloSubTema?.f_nombre_subtema.toUpperCase()}</h2>
          <IonText>
            <p>{datosContenidoSubtema.f_contenido}</p>
            <Link
              key={datosContenidoSubtema.f_id}
              to={`/cuestionario/${datosContenidoSubtema.f_id}`}
            >
              <IonButton>Resolver Cuestionario</IonButton>
            </Link>
          </IonText>
        </IonContent>
      );
    } else if (datosContenidoSubtema.f_tipo === "foto") {
      content = (
        <IonContent fullscreen className="ion-padding">
          <IonImg src={datosContenidoSubtema.f_contenido} />
          <Link
            key={datosContenidoSubtema.f_id}
            to={`/cuestionario/${datosContenidoSubtema.f_id}`}
          >
            <IonButton>Resolver Cuestionario</IonButton>
          </Link>
        </IonContent>
      );
    } else if (datosContenidoSubtema.f_tipo === "video") {
      content = (
        <IonContent fullscreen className="ion-padding">
          <video autoPlay={false} controls={true}>
            <source src={datosContenidoSubtema.f_contenido} type="video/mp4" />
          </video>
          <Link
            key={datosContenidoSubtema.f_id}
            to={`/cuestionario/${datosContenidoSubtema.f_id}`}
          >
            <IonButton>Resolver Cuestionario</IonButton>
          </Link>
        </IonContent>
      );
    } else {
      // Manejar otros tipos de contenido o mostrar un mensaje de error si es necesario
      content = (
        <IonContent className="ion-padding">
          <IonText>
            <p>Tipo de contenido no válido</p>
          </IonText>
        </IonContent>
      );
    }
  });

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <Toolbar
          showBackButton={true}
          encabezado="CONTENIDO"
          userName={perfil.username}
          avatarUrl={perfil.avatar_url}
        />
      </IonHeader>
      {content}
    </IonPage>
  );
};

export default Contenido;
*/