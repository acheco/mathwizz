import { IonImg } from "@ionic/react";
import React, { useState, useEffect } from "react";
import "../assets/icons/think.png";

const CalculoPuntuacion = ({ puntuacion }) => {
  const [mensaje, setMensaje] = useState("");
  const [icono, setIcono] = useState("");

  useEffect(() => {
    let mensaje = "";
    if (puntuacion <= 5) {
      mensaje = "Necesitas practicar más";
    } else if (puntuacion <= 8) {
      mensaje = "¡Buen trabajo!";
    } else {
      mensaje = "¡Excelente trabajo!";
    }

    setMensaje(mensaje);
  }, [puntuacion]);

  useEffect(() => {
    let icono = "";
    if (puntuacion <= 5) {
      icono = "/src/assets/icons/think.png";
    } else if (puntuacion === 6) {
      icono = "/src/assets/icons/good-job.png";
    } else if (puntuacion === 7) {
      icono = "/src/assets/icons/great-job.png";
    } else if (puntuacion === 8) {
      icono = "/src/assets/icons/well-done.png";
    } else if (puntuacion === 9) {
      icono = "/src/assets/icons/excellent.png";
    } else {
      icono = "/src/assets/icons/proud.png";
    }

    setIcono(icono);
  }, [puntuacion]);

  return (
    <div>
      <IonImg
        src={icono}
        alt="icon"
        style={{
          maxWidth: "300px",
          maxHeight: "300px",
          margin: " 3em auto",
        }}
      ></IonImg>
      <ion-card
        color="tertiary"
        style={{
          borderRadius: "20px",
          textAlign: "center",
          margin: "auto",
          maxWidth: "350px",
        }}
      >
        <ion-card-header style={{ padding: "2.5em" }}>
          <ion-card-title>{mensaje}</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <ion-card-subtitle style={{ marginBottom: "40px" }}>
            Tu puntuación fue de:
          </ion-card-subtitle>
          <ion-card-title style={{ marginBottom: "25px" }}>
            {puntuacion} punto/s
          </ion-card-title>
        </ion-card-content>
      </ion-card>
    </div>
  );
};

export default CalculoPuntuacion;
