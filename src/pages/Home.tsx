import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { arrowForwardOutline } from "ionicons/icons";
import "../styles/home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <br />
          <IonTitle
            style={{
              textAlign: "center",
              margin: "auto",
              fontWeight: "700",
              fontSize: "30px",
            }}
          >
            MathWizz
          </IonTitle>
          <br />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src="/src/assets/logoFinal.png"
                style={{ width: "80%", height: "80%", margin: "auto" }}
              ></IonImg>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonTitle
                style={{
                  textAlign: "center",
                  marginBottom: "55px",
                  fontSize: "30px",
                  fontWeight: "Bold",
                }}
                color="success"
                className="ion-title ion-text-large"
              >
                Bienvenidos a <br /> MathWizz
              </IonTitle>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center ">
            <IonButton
              routerLink="/login"
              color="secondary"
              expand="block"
              shape="round"
              className="efectoBoton"
            >
              Ingresar
              <IonIcon slot="end" icon={arrowForwardOutline}></IonIcon>
            </IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: "10px", fontWeight: "400" }}>
            &copy; {new Date().getFullYear()} MathWizz. Todos los derechos
            reservados.
          </span>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
