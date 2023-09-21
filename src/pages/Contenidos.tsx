import { IonContent, IonHeader, IonPage } from "@ionic/react";
import React from "react";
import Toolbar from "../components/Toolbar";

const Contenidos: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <IonContent className="ion-padding"></IonContent>
    </IonPage>
  );
};

export default Contenidos;
