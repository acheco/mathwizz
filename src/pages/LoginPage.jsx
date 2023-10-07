import { useState } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonToast,
  useIonLoading,
  IonImg,
  IonButtons,
  IonBackButton,
  useIonAlert
} from "@ionic/react";
import { supabase } from "../supabaseClient";
import "../styles/login.css";

const LoginPage = () => {

  const [email, setEmail] = useState("");

  const [showLoading, hideLoading] = useIonLoading();
  const [showAlert] = useIonAlert();


  const handleLogin = async (e) => {
    e.preventDefault();

    await showLoading();
    try {
      await supabase.auth.signInWithOtp({ email });
      await showAlert({
        trigger: "Alert",
        message: "Busque el link de ingreso a MathWizz en su correo!",
        buttons: ['OK'],
      });
    } catch (e) {
      await showAlert({
        message: e.error_description || e.message
      });
    } finally {
      await hideLoading();
    }
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <br />
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle
            style={{
              textAlign: "center",
              margin: "auto",
              marginRight: "10%",
              fontWeight: "700",
              fontSize: "30px",
            }}
          >
            MathWizz
          </IonTitle>
          <br />
        </IonToolbar>
      </IonHeader>

      <IonContent className="loginBody">
        <div className="ion-padding imgContainer">
          <IonImg
            src="./src/assets/logoFinal.png"
            alt="LOGO"
            style={{ width: "50%", margin: "auto" }}
          ></IonImg>
        </div>
        <p style={{ textAlign: "center", margin: "auto", padding: "20px 0" }}>
          Ingresa tu correo para acceder a MathWizz
        </p>
        <IonList inset={true}>
          <form onSubmit={handleLogin}>
            <IonItem fill="solid">
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                placeholder="Ingrese su correo"
                aria-label="email"
                value={email}
                name="email"
                onIonChange={(e) => setEmail(e.detail.value ?? "")}
                type="email"
                required
              ></IonInput>
            </IonItem>
            <div className="ion-text-center">
              <IonButton type="submit" color="secondary" className="btnLogin">
                Login
              </IonButton>
            </div>
          </form>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;