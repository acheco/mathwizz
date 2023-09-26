import {
  IonButton,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MathWizz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div>
          <IonImg src="/src/assets/logo final.png"></IonImg>
        </div>

        <IonButton routerLink="/login">Ingresar</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
