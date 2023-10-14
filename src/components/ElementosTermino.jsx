import { IonContent, IonImg, IonItem, IonLabel, IonList, IonPage, IonTitle } from "@ionic/react";



const ElementosTermino = () => {

    return (
        <div>

            <IonImg src="/src/assets/images/elementosTermino.jpg"></IonImg>
            <h3><b>Los elementos de un término algebraico son:</b></h3>
            <ul >

                <li key="1">
                    <p>
                        <b>Coeficiente:</b>  Es el número que se multiplica por la parte literal.
                    </p>

                </li>

                <li key="2">
                    <b>Literal:</b>  Es la parte que contiene la(s) letra(s).
                </li>

                <li key="3">
                    <b>Exponente:</b>  Es el número que indica cuántas veces se multiplica la parte literal.
                </li>
            </ul>


            <h3><b>Ejemplos de términos algebraicos:</b></h3>
            <ul>
                <li key="4">
                    <p><b>3x²:</b>  Este término tiene un signo positivo, un coeficiente de 3, una parte literal de x², y un exponente de 2 para la variable x.</p>
                </li>
                <li key="5">
                    <p><b>-5ab:</b> Este término tiene un signo negativo, un coeficiente de -5, una parte literal de ab, y un exponente de 1 para la variable a y 1 para la variable b.</p>
                </li>
                <li key="6">
                    <p><b>7:</b> Este término es un monomio con un coeficiente de 7 y una parte literal vacía.</p>
                </li>

            </ul>

            <h3><b>Clasificación de los términos algebraicos:</b></h3>
            <p>
                Los términos algebraicos se pueden clasificar según el número de variables que contienen. Los términos que contienen una sola variable se denominan monomios. Los términos que contienen dos variables se denominan binomios. Los términos que contienen tres variables se denominan trinomios. Los términos que contienen más de tres variables se denominan polinomios.
            </p>

            <h3><b>Ejemplos de clasificación de términos algebraicos:</b></h3>
            <ul>
                <li key="7">
                    <p><b>3x²:</b>  Este término es un monomio porque contiene una sola variable.</p>
                </li>

                <li key="8">
                    <p><b>-5ab:</b> Este término es un binomio porque contiene dos variables.</p>
                </li>

                <li>
                    <p><b>7x² - 2x + 5: </b> Este término es un trinomio porque contiene tres variables.</p>
                </li>
                <li key="9">
                    <p><b>2x³ + 3x² - 5x + 7:</b> Este término es un polinomio porque contiene más de tres variables.</p>
                </li>

            </ul>

        </div>

    )

}


export default ElementosTermino;


