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
} from "@ionic/react";
import { supabase } from "../lib/helper/supabaseClient";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");

  const [showLoading, hideLoading] = useIonLoading();
  const [showToast] = useIonToast();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log();
    e.preventDefault();
    await showLoading();
    try {
      await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: "http://localhost:8100/temas",
        },
      });
      await showToast({
        message: "Revise su correo para el link de ingreso a MathWizz!",
      });
    } catch (e: any) {
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
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login to MathWizz</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="ion-padding">
          <IonImg
            src="./src/assets/logoFinal.png"
            alt="LOGO"
            style={{ width: "50%", margin: "auto" }}
          ></IonImg>
          <p>
            Accede a MathWizz vía Magic Link ingresando tu correo a continuación
          </p>
        </div>
        <IonList inset={true}>
          <form onSubmit={handleLogin}>
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                aria-label="email"
                value={email}
                name="email"
                onIonChange={(e) => setEmail(e.detail.value ?? "")}
                type="email"
              ></IonInput>
            </IonItem>
            <div className="ion-text-center">
              <IonButton type="submit" fill="clear">
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
