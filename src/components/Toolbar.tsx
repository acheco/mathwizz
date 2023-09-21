import {
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonAvatar,
} from "@ionic/react";
import React from "react";

const Toolbar: React.FC = () => {
  return (
    <IonToolbar>
      <IonButtons slot="start">
        <IonBackButton defaultHref="./Home.tsx"></IonBackButton>
      </IonButtons>
      <IonTitle slot="start">Temas</IonTitle>
      <IonAvatar slot="end">
        <img
          src="https://freesvg.org/img/1694855023Alien%20with%20pointy%20ears%202.png"
          alt=""
        />
      </IonAvatar>
    </IonToolbar>
  );
};

export default Toolbar;
