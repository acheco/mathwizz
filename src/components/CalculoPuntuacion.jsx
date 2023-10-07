import { IonImg } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import "../assets/icons/think.png"

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

        <ion-card>
            <IonImg src={icono} alt='icon'></IonImg>
            <ion-card-header>
                <ion-card-title>{mensaje}</ion-card-title>
            </ion-card-header>

            <ion-card-content>
                <ion-card-subtitle>Obtuviste {puntuacion} puntos</ion-card-subtitle>
            </ion-card-content>
        </ion-card>


    );
}

export default CalculoPuntuacion;
