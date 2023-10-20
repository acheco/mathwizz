import { IonText } from "@ionic/react";
import React from "react";

const DesigualdadInecuaciones = () => {
  return (
    <div>
      <iframe
        style={{ marginBottom: "1rem" }}
        width="380"
        height="315"
        src="https://www.youtube.com/embed/NAKaOkg0LDM?si=WpuJjMomnfMHBOXy"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <IonText>
        Las propiedades de las desigualdades e inecuaciones en matemáticas son
        fundamentales para comprender y resolver expresiones desiguales. Aquí se
        resumen las propiedades clave:
      </IonText>

      <ul>
        <li>
          <b>Propiedad de la suma: </b> Si tienes "a &lt; b," entonces "a + c
          &lt; b + c" y "a - c &lt; b - c" también son verdaderas.
        </li>
        <li>
          <b>Propiedad de la multiplicación: </b> Si "c" es positivo, entonces
          "ac &lt; bc" y "a/c &lt; b/c" son verdaderas, pero si "c" es negativo,
          las desigualdades se invierten.
        </li>
        <li>
          <b>Propiedad de la transición: </b> Si tienes "a &lt; b" y "b &lt; c,"
          entonces puedes combinarlas en "a &lt; c."
        </li>
        <li>
          <b>Propiedad de reflexión: </b> a &lt; b es equivalente a b &gt; a.
        </li>
        <li>
          <b>Multiplicación por constante no nula: </b> Si tienes "a &lt; b" y
          multiplicas ambos lados por "k," la dirección de la desigualdad no
          cambia.
        </li>
        <li>
          <b>Propiedad de sustitución: </b> Si "c" está entre "a" y "b," puedes
          reemplazar "a" y "b" por "c" sin cambiar la validez.
        </li>
        <li>
          <b>Adición de desigualdades:</b> Si tienes "a &lt; b" y "c &lt; d,"
          puedes sumarlas para obtener "a + c &lt; b + d.
        </li>
        <li>
          <b>Multiplicación de desigualdades: </b> Si tienes "a &lt; b" y "c
          &lt; d" con números positivos, puedes multiplicarlas para obtener "ac
          &lt; bd."
        </li>
        <li>
          <b>División de desigualdades: </b> Si tienes "a &lt; b" y "c &lt; d"
          con números positivos y "c" menor que "d," puedes dividirlas para
          obtener "a/c &lt; b/d."
        </li>
        <li>
          <b>Intransitividad:</b> No siempre puedes combinar "a &lt; b" y "b
          &lt; c" en "a &lt; c," especialmente con números negativos.
        </li>
      </ul>
    </div>
  );
};

export default DesigualdadInecuaciones;
