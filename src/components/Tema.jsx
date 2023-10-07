import { IonButton } from "@ionic/react";



const BtnTema = ({ titulo }) => {
  return (
    <div>
      <IonButton className="btnTitulo" expand="block">
        {titulo}
      </IonButton>
    </div>
  );
};

export default BtnTema;
