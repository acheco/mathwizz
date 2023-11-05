import {
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
} from "@ionic/react";

const TeoremaFundamentalTriangulo = () => {
  return (
    <div>
      <IonImg src="/src/assets/images/TeoremaFundamentalTriángulo.jpg"></IonImg>
      <h3>
        <b>Teorema Fundamental del Triángulo</b>
      </h3>

      <p>
        El Teorema Fundamental del Triángulo, también conocido como el Teorema
        de la Desigualdad Triangular, es un principio fundamental en geometría
        que establece una relación entre las longitudes de los lados de un
        triángulo. Este teorema establece que en un triángulo cualquiera, la
        suma de las longitudes de dos lados cualesquiera siempre debe ser mayor
        que la longitud del tercer lado.
      </p>

      <p>
        De manera más formal, si tenemos un triángulo con lados de longitudes
        "a," "b" y "c," entonces el Teorema Fundamental del Triángulo se expresa
        de la siguiente manera:
      </p>

      <ul>
        <li key="1"> a + b {">"} c </li>

        <li key="2"> a + c {">"} b </li>

        <li key="6"> b + c {">"} a </li>
      </ul>

      <p>
        En otras palabras, la suma de las longitudes de cualquier par de lados
        de un triángulo siempre debe ser mayor que la longitud del tercer lado.
        Si esta condición no se cumple para algún par de lados, entonces no se
        puede formar un triángulo con esas longitudes.
      </p>

      <p>
        Este teorema es esencial en la geometría y se utiliza para determinar si
        un conjunto de tres segmentos puede formar un triángulo válido o no.
        Además, es un principio fundamental en la resolución de problemas y
        cálculos relacionados con triángulos.
      </p>

      <p>
        <b>Ejemplos</b>
      </p>

      <ul>
        <li>
          Un triángulo rectángulo tiene un ángulo de 90 grados. La suma de los
          otros dos ángulos es 180 - 90 = 90 grados.
        </li>

        <li>
          Un triángulo isósceles tiene dos ángulos iguales. La suma de los otros
          dos ángulos es 180 - 2 * (ángulo igual) = 180 - 2 * ángulo igual.
        </li>

        <li>
          Un triángulo equilátero tiene tres ángulos iguales de 60 grados. La
          suma de los tres ángulos es 60 * 3 = 180 grados.
        </li>
      </ul>
    </div>
  );
};

export default TeoremaFundamentalTriangulo;
