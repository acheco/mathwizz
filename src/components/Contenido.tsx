import React from 'react';
import { IonContent, IonText, IonImg } from '@ionic/react';

interface ContenidoDinamico {
  tipoContenido: string;
  contenido: string; // Dependiendo del tipo de contenido, esto puede ser un texto, una URL de imagen o una URL de video
}

const Contenido: React.FC<ContenidoDinamico> = ({ tipoContenido, contenido }) => {
  if (tipoContenido === 'parrafo') {
    return (
      <IonContent className="ion-padding">
        <IonText>
          <p>{contenido}</p>
        </IonText>
      </IonContent>
    );
  } else if (tipoContenido === 'foto') {
    return (
      <IonContent className="ion-padding">
        <IonImg src={contenido} />
      </IonContent>
    );
  } else if (tipoContenido === 'video') {
    return (
      <IonContent className="ion-padding">
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