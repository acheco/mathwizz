import { IonImg, IonItem, IonLabel, IonList, IonText } from "@ionic/react";

const IgualdadEcuaciones = () => {
  return (
    <div>
      <figure>
        <IonImg
          src="/src/assets/images/igualdad_ecuaciones.png"
          alt="igualdad_ecuaciones"
        ></IonImg>
        <figcaption style={{ fontSize: "smaller" }}>
          Fuente: www.portaleducativo.net/
        </figcaption>
      </figure>

      <IonItem>
        <h3>
          <b>Igualdad:</b>
        </h3>
      </IonItem>
      <IonText>
        <p>
          La igualdad es una relación matemática que establece que dos
          expresiones o cantidades son equivalentes o tienen el mismo valor. Se
          representa mediante el signo "=" (signo de igual) y se utiliza para
          comparar dos términos o expresiones numéricas. En una igualdad, lo que
          está a la izquierda del signo "=" debe ser igual a lo que está a la
          derecha del signo "=".
        </p>
      </IonText>
      <IonText>
        <h4>
          <b>Ejemplo:</b>
        </h4>
      </IonText>
      <ul>
        <li>
          <b>3 + 2 = 5:</b> Esta es una igualdad que indica que la suma de 3 y 2
          es igual a 5.
        </li>
      </ul>

      <IonItem>
        <h3>
          <b>Ecuación:</b>
        </h3>
      </IonItem>

      <IonText>
        <p>
          Una ecuación es una igualdad que contiene una o más incógnitas
          <b>(variables)</b> y se utiliza para resolver problemas matemáticos o
          encontrar los valores desconocidos de las variables. En una ecuación,
          generalmente se busca encontrar el valor de la variable que satisface
          la igualdad.
        </p>
      </IonText>

      <IonText>
        <h4>
          <b>Ejemplo:</b>
        </h4>
      </IonText>
      <ul>
        <li>
          <b>2x + 3 = 7:</b> Esta es una ecuación en la que la variable "x" es
          una incógnita. Para resolverla, debes encontrar el valor de "x" que
          hace que la ecuación sea verdadera. En Este caso, x = 2, ya que 2(2) +
          3 = 7.
        </li>
      </ul>

      <IonText>
        <p>
          En resumen, la igualdad es una relación que establece que dos
          cantidades son iguales, mientras que una ecuación es una igualdad que
          involucra una o más incógnitas y se utiliza para encontrar los valores
          desconocidos de esas incógnitas. Las ecuaciones son herramientas
          importantes en matemáticas para resolver una variedad de problemas y
          modelar situaciones del mundo real.
        </p>
      </IonText>
    </div>
  );
};

export default IgualdadEcuaciones;
