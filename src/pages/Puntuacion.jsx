import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButton,
  IonFooter,
} from "@ionic/react";
import CalculoPuntuacion from "../components/CalculoPuntuacion";
import Toolbar from "../components/Toolbar";
import DatosPerfil from "../data/DatosUsuario";
import puntuacion from "../data/datosPuntuacion.jsx";
import { useParams } from "react-router";

const obtenerPuntuacion = puntuacion;

const Puntuacion = () => {
  const perfil = DatosPerfil();
  const { puntuacion } = useParams();

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <Toolbar
            showBackButton={true}
            encabezado="PUNTUACIÓN"
            avatarUrl={perfil.avatar_url}
            userName={perfil.username}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent color="secondary">
        <CalculoPuntuacion puntuacion={puntuacion} />

        <div style={{ textAlign: "center", marginTop: "3em" }}>
          <IonButton
            onClick={obtenerPuntuacion}
            size="large"
            routerLink="/temas"
          >
            Volver a Contenido
          </IonButton>
        </div>
      </IonContent>

      <IonFooter>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: "10px", fontWeight: "400" }}>
            <a
              href="https://www.flaticon.com/free-stickers/good-job"
              title="good job stickers"
            >
              Good job stickers created by paulalee - Flaticon
            </a>
          </span>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default Puntuacion;
