import { IonText, IonImg, IonItem } from "@ionic/react";

const ExpresionesAlgebraicas = () => {
  return (
    <div>
      <figure style={{ margin: "0px" }}>
        <IonImg
          objectFit="cover"
          src="/src/assets/images/expresiones_algebraicas.png"
          alt="expresiones_algebraicas"
        />
        <figcaption
          style={{ color: "#fff", font: "italic smaller sans-serif" }}
        >
          Fuente: https://youleadup.com/
        </figcaption>
      </figure>
      <IonText>
        <p>
          Las expresiones algebraicas son combinaciones de números, letras
          <b>(variables)</b> y operaciones matemáticas, como suma, resta,
          multiplicación y división. Estas expresiones se utilizan para
          representar cantidades desconocidas o variables y para describir
          relaciones matemáticas. Los elementos clave incluyen:
        </p>
      </IonText>
      <ol>
        <li>
          <b>Variable:</b> Una letra o símbolo que representa un valor
          desconocido o variable en una expresión, como "x" en "x + 5".
        </li>
        <li>
          <b>Coeficiente:</b> El número que multiplica a una variable, como el
          "3" en "3x".
        </li>
        <li>
          <b>3. Término:</b> Una combinación de coeficiente y una o más
          variables con operaciones, como "2x^2".
        </li>
        <li>
          <b>Exponente:</b> Indica cuántas veces se multiplica una variable por
          sí misma, como "x^2" (2 veces).
        </li>
        <li>
          <b>Operadores:</b> Suma (+), resta (-), multiplicación (*), división
          (/) y potenciación (^) se utilizan para operar entre términos.
        </li>
        <li>
          <b>Expresiones Algebraicas simples:</b>Ejemplos son "2x + 3y", "5a -
          7b" y "x^2 + 4x - 6".
        </li>
        <li>
          <b>Ecuaciones Algebraicas:</b> Expresiones con "=" que representan
          igualdades. Resolverlas encuentra los valores que hacen que la
          ecuación sea verdadera.
        </li>
        <li>
          <b>Inecuaciones Algebraicas:</b> Expresiones con signos de desigualdad
          (&lt;, &gt; , ≤, ≥). Resolverlas encuentra los valores que satisfacen
          la desigualdad.
        </li>
        <li>
          <b>Simplificación: </b> Busca combinar términos semejantes y reducir
          la expresión a su forma más simple.
        </li>
      </ol>

      <IonItem>
        <p style={{ fontSize: "1.2rem" }}>
          <b>Los tipos comunes de expresiones son:</b>
        </p>
      </IonItem>
      <ul>
        <li>
          <b>Monomios:</b> Un solo término, como 5x², 3x, -2.
        </li>
        <li>
          <b>Binomios:</b> Dos términos, como 3x² + 2x, x² - 2.
        </li>
        <li>
          <b>Trinomios:</b> Tres términos, como x² + 2x - 3, 3x² - 2x + 1.
        </li>
        <li>
          <b>Polinomios:</b> Más de un término, como 3x² + 2x - 3, x² + 2x - 3 +
          4.
        </li>
      </ul>

      <IonText>
        <p>
          Las expresiones algebraicas son fundamentales en matemáticas y se
          utilizan para modelar una variedad de situaciones en ciencia y
          tecnología. Su comprensión es esencial para resolver ecuaciones y
          problemas matemáticos.
        </p>
      </IonText>
    </div>
  );
};

export default ExpresionesAlgebraicas;
