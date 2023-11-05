import { IonImg } from "@ionic/react";

const PatronesNumericos = () => {
  return (
    <div>
      <IonImg src="/src/assets/images/PatronesNuméricos.jpg"></IonImg>

      <h3>
        <b>Los patrones numéricos</b>
      </h3>

      <p>
        Los patrones numéricos son secuencias de números que siguen reglas
        específicas en matemáticas. Pueden ser simples o complejos y se utilizan
        para describir y predecir secuencias numéricas. Algunos ejemplos comunes
        incluyen:
      </p>

      <ol>
        <li>
          <b>Patrón de Suma/Resta Constante:</b> Cada número se obtiene sumando
          o restando una constante al número anterior, como 2, 4, 6, 8, 10.
        </li>
        <li>
          <b>Patrón de Multiplicación/División Constante:</b> Cada número se
          obtiene multiplicando o dividiendo por una constante, como 3, 6, 12,
          24.
        </li>
        <li>
          <b>Serie Aritmética:</b> Los números se obtienen sumando una
          diferencia constante, como 5, 9, 13, 17.
        </li>
        <li>
          <b>Serie Geométrica:</b> Los números se obtienen multiplicando por una
          razón constante, como 2, 6, 18, 54.
        </li>
        <li>
          <b>Secuencia de Fibonacci:</b> Cada número es la suma de los dos
          anteriores, comenzando con 0 y 1.
        </li>
        <li>
          <b>Secuencia Cuadrada:</b> Los números son cuadrados perfectos, como
          1, 4, 9, 16.
        </li>
        <li>
          <b>Secuencia de Potencias:</b> Cada número es una potencia de un
          número base, como 2, 4, 8, 16.
        </li>
        <li>
          <b>Secuencia de Números Primos:</b> Incluye números primos en orden,
          como 2, 3, 5, 7, 11.
        </li>
      </ol>

      <p>
        Estos patrones numéricos son fundamentales para analizar y resolver
        problemas matemáticos y se aplican en diversas áreas de las matemáticas
        y las ciencias para modelar y entender diferentes situaciones.
      </p>
    </div>
  );
};

export default PatronesNumericos;
