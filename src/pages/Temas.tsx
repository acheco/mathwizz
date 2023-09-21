import { IonContent, IonHeader, IonPage } from "@ionic/react";
import React from "react";
import Tema from "../components/Tema";
import Toolbar from "../components/Toolbar";

const tituloBtn = [
  {
    id: 1,
    titulo: "Numeros Naturales",
  },
  {
    id: 2,
    titulo: "Numeros Reales",
  },
];

const Temas: React.FC = () => {
  return (
    <IonPage className="tipoLetra">
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <IonContent className="ion-padding">
        {tituloBtn.map((btnTitulo) => {
          const { id, titulo } = btnTitulo;
          return <Tema key={id} titulo={titulo} />;
        })}
      </IonContent>
    </IonPage>
  );
};

export default Temas;
