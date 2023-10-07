import { IonAvatar, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonFooter } from "@ionic/react";
import CalculoPuntuacion from "../components/CalculoPuntuacion";
import { useParams } from "react-router";

const Puntuacion = () => {

    const { puntuacion } = useParams();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Titulo</IonTitle>
                    <IonAvatar slot="end">Avatar</IonAvatar>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <CalculoPuntuacion puntuacion={puntuacion} />

                <IonButton routerLink="/temas">Volver a Contenido</IonButton>
            </IonContent>

            <IonFooter>
                <div style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "10px", fontWeight: "400" }}>
                        <a href="https://www.flaticon.com/free-stickers/good-job" title="good job stickers">Good job stickers created by paulalee - Flaticon</a>
                    </span>
                </div>
            </IonFooter>
        </IonPage>
    )
}


export default Puntuacion;

