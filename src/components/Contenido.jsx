import React from "react";
import { IonContent, IonText, IonImg, IonButton } from "@ionic/react";


const Contenido = ({
  tipoContenido,
  contenido,
}) => {
  if (tipoContenido === "parrafo") {
    return (
      <IonContent className="ion-padding">
        <IonText>
          <p>{contenido}</p>
        </IonText>
      </IonContent>
    );
  } else if (tipoContenido === "foto") {
    return (
      <IonContent fullscreen className="ion-padding">
        <IonImg src={contenido} />
      </IonContent>
    );
  } else if (tipoContenido === "video") {
    return (
      <IonContent fullscreen className="ion-padding">
        <video autoPlay={false} controls={true}>
          <source src={contenido} type="video/mp4" />
        </video>
      </IonContent>
    );
  } else {
    // Manejar otros tipos de contenido o mostrar un mensaje de error si es necesario
    return (
      <IonContent className="ion-padding">
        <IonText>
          <p>Tipo de contenido no válido</p>
        </IonText>
      </IonContent>
    );
  }
};

export default Contenido;
