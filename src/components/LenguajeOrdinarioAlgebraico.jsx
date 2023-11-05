import { IonImg, IonText, IonItem } from "@ionic/react";

const LenguajeOrdinarioAlgebraico = () => {
  return (
    <div>
      <figure style={{ margin: "0px" }}>
        <IonImg
          objectFit="cover"
          src="/src/assets/images/lenguajeOrdAlg.jpg"
          alt="expresiones_algebraicas"
        />
        <figcaption style={{ color: "#000", fontSize: "smaller " }}>
          Fuente: slideplayer.es
        </figcaption>
      </figure>

      <IonText>
        <p>
          El lenguaje ordinario y el lenguaje algebraico son dos formas
          diferentes de expresar ideas y relaciones matemáticas. Aquí hay una
          comparación entre ambos:
        </p>
      </IonText>
      <ol>
        <li>
          <b>Lenguaje Ordinario:</b>
        </li>
        <ul>
          <li>
            Utiliza palabras y frases comunes en un idioma, como el español o el
            inglés, para describir situaciones y problemas matemáticos.
          </li>
          <li>
            Es más descriptivo y a menudo se utiliza para explicar conceptos
            matemáticos de manera verbal.
          </li>
        </ul>
      </ol>

      <IonText>
        <p>
          <b>Ejemplo:</b> Si tienes tres manzanas y le das dos a tu amigo,
          ¿cuántas manzanas te quedan?
        </p>
      </IonText>

      <ol>
        <li>
          <b>Lenguaje Algebraico:</b>
        </li>
        <ul>
          <li>
            Utiliza símbolos y letras para representar números y cantidades
            desconocidas.
          </li>
          <li>
            Se utiliza para expresar relaciones matemáticas de manera más
            concisa y generalizada.
          </li>
        </ul>
      </ol>
      <IonText>
        <p>
          <b>Ejemplo:</b> Si representamos el número de manzanas que tienes con
          la letra <b> 'x'</b> y el número que le das a tu amigo con la letra{" "}
          <b> 'y'</b>, entonces la ecuación que describe la situación es{" "}
          <b>x - y = 1.</b>
        </p>
      </IonText>

      <p>
        El lenguaje algebraico es especialmente útil cuando se trata de resolver
        problemas matemáticos más complejos o cuando se necesita generalizar una
        relación matemática para que sea aplicable a diferentes situaciones.
        Permite simplificar expresiones y trabajar de manera más eficiente en
        cálculos matemáticos.
      </p>
    </div>
  );
};

export default LenguajeOrdinarioAlgebraico;
