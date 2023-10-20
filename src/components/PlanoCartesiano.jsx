import { IonContent, IonImg, IonItem, IonLabel, IonList, IonPage, IonTitle } from "@ionic/react";

const PlanoCartesiano = ()=>{

    return(
        <div>

          <IonImg src="/src/assets/images/PlanoCartesiano.jpg"></IonImg>
        

            <p>El plano cartesiano es un sistema bidimensional para 
            representar puntos en el espacio mediante pares de números
         reales. Fue creado por René Descartes en el siglo XVII y es 
         fundamental en matemáticas y ciencias. Consta de dos ejes 
         perpendiculares: el eje X (horizontal) y el eje Y (vertical),
          que se cruzan en el origen (0, 0).</p>

          <p>Los puntos en el plano se representan como pares
         ordenados (x, y), donde "x" es la coordenada en el eje
          X y "y" en el eje Y, indicando la posición relativa al
           origen. El plano se divide en cuatro cuadrantes numerados 
           en sentido anti horario.</p>

           <p>Se puede calcular la distancia entre puntos utilizando 
            el teorema de Pitágoras y la fórmula de distancia 
            euclidiana. Además, se pueden utilizar coordenadas 
            polares (r, θ) en lugar de cartesianas para representar 
            puntos, donde "r" es la distancia al origen y "θ" el 
            ángulo respecto al eje X.</p>

            <p>El plano se usa para expresar ecuaciones de rectas y 
            pendientes, siendo esta última una medida de la 
            inclinación respecto al eje X. También se utiliza para
            graficar funciones matemáticas, mostrando cómo la
            variable dependiente cambia con la independiente.</p>
           
            
          
        </div>
    )
}

export default PlanoCartesiano;