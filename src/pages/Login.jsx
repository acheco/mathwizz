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
  useIonToast,
  useIonLoading,
  IonImg,
  IonFooter,
  IonIcon,
} from "@ionic/react";
import { supabase } from "../supabaseClient";
import { arrowForwardOutline } from "ionicons/icons";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");

  const [showLoading, hideLoading] = useIonLoading();
  const [showToast] = useIonToast();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await showLoading();
      await supabase.auth.signIn({ email });
      await showToast({
        message: "Check your email for the login link!",
        duration: 5000,
      });
    } catch (e) {
      await showToast({
        message: e.error_description || e.message,
        duration: 5000,
      });
    } finally {
      await hideLoading();
    }
  };
  return (
    <IonPage>
      <IonHeader></IonHeader>

      <IonContent color="mycolor" className="loginBody">
        <div className="ion-padding imgContainer">
          <IonImg
            src="./src/assets/Logo.png"
            alt="LOGO"
            style={{ width: "60%", margin: "auto" }}
          ></IonImg>
        </div>
        <p className="nombreApp">
          <span style={{ color: "#ef7c8e" }}>MATH</span>
          <span style={{ color: "#b6e2d3" }}>WIZZ</span>
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
              <IonButton type="submit" color="primary" className="btnLogin">
                Login
                <IonIcon slot="end" icon={arrowForwardOutline}></IonIcon>
              </IonButton>
            </div>
          </form>
        </IonList>
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

export default Login;
