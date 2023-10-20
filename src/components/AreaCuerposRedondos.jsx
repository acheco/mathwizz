import { IonContent, IonImg, IonItem, IonLabel, IonList, IonPage, IonTitle } from "@ionic/react";

const AreaCuerposRedondos = ()=>{

    return(
        <div>

          <IonImg src="/src/assets/images/conocilindroesfera.jpg"></IonImg>
            <h3><b>Área de cuerpos redondos (cono, cilindro y esfera)</b></h3>

            <p>El cálculo del área de cuerpos redondos como el cono, 
            el cilindro y la esfera se realiza utilizando fórmulas específicas
           para cada uno de ellos. A continuación, te proporcionaré las fórmulas y una breve
          explicación de cómo calcular el área de cada uno:</p>
            <ol >

                <li key="1">
                    <p>
                        <b>Área de un Cono:</b>  El área superficial de un cono se calcula mediante la siguiente fórmula:
                        Área = π * r * (r + l)
                    </p>

                    <p><b>Donde:</b> </p>
                    <ul>
                        <li>π (pi) es una constante aproximadamente igual a 3.14159.</li>
                        <li>r es el radio de la base del cono.</li>
                        <li>l es la longitud de la generatriz, que es la distancia desde el vértice del cono hasta un punto en la circunferencia de la base.</li>
                    </ul>
                    

                </li>

                <li key="2">
                  <p> <b>Área de un Cilindro:</b>  El área de un cilindro se compone de 
                    dos partes: las dos bases circulares y 
                    la superficie lateral. La fórmula para calcular el área total de un 
                    cilindro es: Área = 2π * r² + 2π * r * h </p> 

                    <p><b>Donde:</b> </p>

                    <ul>
                       <li key="3">π (pi) es la constante mencionada anteriormente.</li>
                       <li key="4">r es el radio de la base del cilindro.</li>
                       <li key="5">h es la altura del cilindro.</li>
                    </ul>

                    
                </li>
                  
                <li key="6">
                <p><b>Área de una Esfera:</b>  El área superficial de una esfera se calcula mediante la siguiente fórmula: Área = 4π * r²</p>  
                
                <p><b>Donde:</b></p>

                <ul>
                    <li key="7">π (pi) es la constante.</li>
                    <li key="8">r es el radio de la esfera.</li>

                </ul>

                </li>
            </ol>

            <p>Para calcular el área de cualquiera de estos cuerpos redondos, 
            simplemente sustituye los valores adecuados en la fórmula correspondiente 
            y realiza los cálculos. Asegúrate de utilizar las unidades correctas para el 
            radio y la altura en función del sistema de unidades que estés utilizando 
            (por ejemplo, metros, centímetros, pulgadas, etc.).</p>


            
          
        </div>
    )
}

export default AreaCuerposRedondos;