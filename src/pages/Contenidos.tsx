import { IonButton, IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Contenido from '../components/Contenido';

const contenidos = [
    {
        id:1,
        contenido:"https://www.youtube.com/watch?v=7iobxzd_2wY&t=7519s&ab_channel=midulive",
        tipoContenido: "video"

    },

    {
      id:2,
      contenido:"https://th.bing.com/th/id/R.222ff96c4d877b540093d288de4b7e9c?rik=QutA6lChQIfJPQ&pid=ImgRaw&r=0",
      tipoContenido:"foto"
    },
    {
        id:3,
        contenido:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tipoContenido: "parrafo"
    }
]

const Contenidos: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Page Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            {contenidos.map((contenid)=>{
                const {id,contenido,tipoContenido,}=contenid;
                return <Contenido key={id} contenido={contenido} tipoContenido={tipoContenido}/>  
})
            }
            <IonFooter>
                <IonButton expand='block'>Resolver Cuestionario</IonButton>
            </IonFooter>
        </IonPage>
    );
};

export default Contenidos;
