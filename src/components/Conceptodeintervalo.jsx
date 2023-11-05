import {
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
} from "@ionic/react";

const ConceptoIntervalo = () => {
  return (
    <div>
      <IonImg src="/src/assets/images/intervaloClasificacion.jpeg"></IonImg>

      <h3>
        <b>Concepto de intervalo, su clasificación y representación</b>
      </h3>

      <p>
        Un intervalo en matemáticas es un conjunto de números reales
        comprendidos entre dos valores específicos. Existen tres categorías
        principales de intervalos y diversas notaciones para representarlos:
      </p>

      <ol>
        <li>
          <b>Intervalo abierto:</b>No incluye los extremos y contiene todos los
          números reales estrictamente entre dos valores. Se denota como (a, b),
          donde "a" y "b" son los extremos, pero no forman parte del conjunto.
          Por ejemplo, (2, 5) abarca números entre 2 y 5, excluyendo 2 y 5.
        </li>
        <li>
          <b>Intervalo cerrado:</b> Incluye ambos extremos y consta de todos los
          números reales iguales o entre dos valores. Se representa como [a, b],
          donde "a" y "b" son los extremos y son parte del conjunto. Ejemplo:
          [1, 4] contiene todos los números entre 1 y 4, incluyendo 1 y 4.
        </li>
        <li>
          <b>Intervalo semiabierto o semicerrado:</b> Incluye un extremo y
          excluye el otro. Se puede expresar de dos formas: {`[a, b)`} o{" "}
          {`(a, b]`}. Por ejemplo, {`[3, 7) `}contiene números iguales o mayores
          que 3, pero menores que 7, incluyendo 3 pero excluyendo 7.
        </li>
      </ol>

      <p>
        Para representar intervalos de manera clara y concisa, se utilizan
        símbolos específicos:
      </p>

      <ul>
        <li>
          (a, b): Intervalo abierto desde "a" hasta "b," sin incluir "a" ni "b."
        </li>
        <li>
          [a, b]: Intervalo cerrado desde "a" hasta "b," incluyendo ambos
          extremos.
        </li>
        <li>
          {`(a, b]`}: Intervalo semiabierto desde "a" hasta "b," excluyendo "a"
          pero incluyendo "b."
        </li>
        <li>
          {`[a, b)`}: Intervalo semiabierto desde "a" hasta "b," incluyendo "a"
          pero excluyendo "b."
        </li>
      </ul>

      <p>
        Estos intervalos se utilizan en matemáticas, especialmente en cálculo y
        análisis, para describir conjuntos de números en el dominio de funciones
        y expresar intervalos de valores válidos en problemas de desigualdades.
        Son una herramienta esencial para definir y comprender conjuntos
        numéricos de manera precisa.
      </p>
    </div>
  );
};

export default ConceptoIntervalo;
