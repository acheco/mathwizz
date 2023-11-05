import {
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonAvatar,
  IonPopover,
  IonContent,
  IonItem,
  IonLabel,
  IonIcon,
  IonChip,
  IonImg,
  useIonRouter,
} from "@ionic/react";
import { person, logOutOutline } from "ionicons/icons";
import { supabase } from "../supabaseClient";
import React, { useRef, useState } from "react";

const Toolbar = ({ showBackButton, encabezado, avatarUrl, userName }) => {
  const popover = useRef(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const router = useIonRouter();

  // Cerrar Sesion

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/", "forward", "replace");
  };
  // Ir a perfil
  const profile = () => {
    router.push("/account", "forward", "replace");
  };

  const openPopover = (e) => {
    if (popover.current.event !== null) {
      popover.current.event = e;
      setPopoverOpen(true);
    }
  };

  return (
    <IonToolbar color="secondary" className="ion-title ion-text-large">
      {showBackButton && (
        <IonButtons slot="start">
          <IonBackButton defaultHref="/"></IonBackButton>
        </IonButtons>
      )}
      <IonTitle style={{ color: "#000", fontWeight: "600" }}>
        {encabezado}
      </IonTitle>
      <IonChip onClick={openPopover} color="#000" slot="end">
        <IonLabel style={{ color: "#000" }}>{userName}</IonLabel>
        <IonPopover
          ref={popover}
          isOpen={popoverOpen}
          onDidDismiss={() => setPopoverOpen(false)}
        >
          <IonContent class="ion-padding">
            <IonItem onClick={profile} style={{ cursor: "pointer" }}>
              Profile <IonIcon slot="end" icon={person}></IonIcon>
            </IonItem>
          </IonContent>
          <IonContent class="ion-padding">
            <IonItem onClick={signOut} className="subMenu">
              Cerrar Sesión <IonIcon slot="end" icon={logOutOutline}></IonIcon>
            </IonItem>
          </IonContent>
        </IonPopover>
      </IonChip>
    </IonToolbar>
  );
};

export default Toolbar;
