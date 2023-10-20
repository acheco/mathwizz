import { IonContent, IonImg, IonItem, IonLabel, IonList, IonPage, IonTitle } from "@ionic/react";

const ConceptoClasificaciónNúmerosReales = ()=>{

    return(
        <div>

          <IonImg src="/src/assets/images/ConceptoClasificaciónNúmerosReales.jpg"></IonImg>
            <h3><b>Concepto y clasificación de los números reales</b></h3>

            <p>Los números reales son un conjunto matemático que incluye todos 
            los números que se utilizan comúnmente en matemáticas y en el mundo 
            real. Los números reales se pueden clasificar en diferentes 
            subconjuntos según sus propiedades y características. Aquí te
             proporciono una breve descripción de los conceptos y 
             clasificaciones de los números reales:</p>

             <ol>
                <li><b>Números Naturales (N):</b> Este conjunto incluye números enteros positivos que se utilizan para contar objetos. Es decir, los números 1, 2, 3, 4, 5, ... y así sucesivamente.</li>
                <li><b>Números Enteros (Z):</b> Este conjunto incluye todos los números positivos y sus negativos, junto con el cero. Incluye números como -3, -2, -1, 0, 1, 2, 3, ...</li>
                <li><b>Números Racionales (Q):</b> Los números racionales son aquellos que pueden expresarse como una fracción de dos números enteros, donde el denominador no es cero. Esto incluye números como 1/2, -3/4, 7, 0.25, -2.3333 (números decimales finitos o periódicos).</li>
                <li><b>Números Irracionales:</b> Los números irracionales son aquellos que no pueden expresarse como una fracción exacta de dos enteros y tienen expansiones decimales infinitas y no periódicas. Ejemplos conocidos de números irracionales son la raíz cuadrada de 2 (√2), π (pi), y e (número de Euler).</li>
                <li><b>Números Reales (R):</b> Este conjunto es la unión de los números racionales e irracionales. Los números reales incluyen todos los números que se pueden representar en la recta numérica, sin importar si son racionales o irracionales. En otras palabras, los números reales abarcan todo el espectro de números posibles.</li>

             </ol>

             <p>Los números reales se pueden ordenar en la recta numérica de 
            manera continua, lo que significa que entre dos números reales
         cualesquiera siempre hay una cantidad infinita de otros números reales. 
         Además, los números reales se utilizan en una amplia variedad de 
         aplicaciones matemáticas y científicas debido a su versatilidad y 
         capacidad para modelar fenómenos del mundo real con precisión.</p>

             

          
        </div>
    )
}

export default ConceptoClasificaciónNúmerosReales;