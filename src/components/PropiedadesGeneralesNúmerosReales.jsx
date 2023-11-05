import {
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
} from "@ionic/react";

const PropiedadesGeneralesNumerosReales = () => {
  return (
    <div>
      <IonImg src="/src/assets/images/PropiedadesGeneralesNúmerosReales.jpg"></IonImg>

      <h3>
        <b>Propiedades Generales de los NúmerosReales </b>
      </h3>

      <p>
        Los números reales son fundamentales en matemáticas y modelización de
        fenómenos del mundo real debido a sus propiedades esenciales:
      </p>

      <ol>
        <li>
          <b>Cerradura bajo operaciones básicas:</b> Los números reales
          funcionan con suma, resta, multiplicación y división, siempre
          produciendo números reales como resultado.
        </li>
        <li>
          <b>Conmutatividad y asociatividad:</b> Las operaciones de suma y
          multiplicación son conmutativas (el orden no importa) y asociativas
          (se pueden agrupar números de cualquier manera).
        </li>
        <li>
          <b>Elemento neutro:</b> El 0 es el elemento neutro para la suma, y el
          1 para la multiplicación.
        </li>
        <li>
          <b>Existencia de inversos:</b> Cada número real tiene un inverso
          aditivo y multiplicativo, como -a y 1/a (si a ≠ 0).
        </li>
        <li>
          <b>Propiedad distributiva:</b> La multiplicación se distribuye sobre
          la suma.
        </li>
        <li>
          <b>Orden y comparación:</b> Los números reales se pueden comparar, lo
          que permite determinar relaciones de menor, igual o mayor entre ellos.
        </li>
        <li>
          <b>Propiedad del tricótomo:</b> Para dos números reales, solo una de
          tres afirmaciones es verdadera: {"a < b, a = b, o a > b."}{" "}
        </li>
        <li>
          <b>Densidad de números racionales:</b> Siempre se encuentra un número
          racional entre dos números reales.
        </li>
        <li>
          <b>Existencia de números irracionales:</b> Los números reales incluyen
          números irracionales con expansiones decimales infinitas y no
          periódicas, como π o √2.
        </li>
      </ol>

      <p>
        Estas propiedades permiten realizar operaciones aritméticas, resolver
        ecuaciones y modelar situaciones en matemáticas y ciencias, convirtiendo
        a los números reales en una herramienta esencial.
      </p>
    </div>
  );
};

export default PropiedadesGeneralesNumerosReales;
