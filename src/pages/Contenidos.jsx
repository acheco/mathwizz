import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonImg,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

const Contenido = ({ }) => {
  const { idSubTema } = useParams();
  const [contenidoSubtema, setContenidoSubtema] = useState([]); // Cambia el tipo de datos según tu esquema de la tabla

  //-- CONSULTA PARA EL CONTENIDO DE LOS SUBTEMAS --//

  useEffect(() => {
    async function fetchContenidoSubtema() {
      const { data, error } = await supabase
        .from("t_contenido_subtema")
        .select("*")
        .eq("f_id_subtema", idSubTema);
      if (error) console.log("error", error);
      else setContenidoSubtema(data);
    }
    fetchContenidoSubtema();
  }, [idSubTema]);

  let content;

  contenidoSubtema.map((datosContenidoSubtema) => {
    if (datosContenidoSubtema.f_tipo === "parrafo") {
      content = (
        <IonContent className="ion-padding">
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
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/subtemas" />
          </IonButtons>
          <IonTitle className="ion-text-center">MathWizz</IonTitle>
        </IonToolbar>
      </IonHeader>
      {content}
    </IonPage>
  );
};

export default Contenido;
