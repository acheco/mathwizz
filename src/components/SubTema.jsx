import { IonButton } from "@ionic/react";


const BtnSubTema = ({ titulo }) => {
  return (
    <div>
      <IonButton className="btnTitulo" expand="block">
        {titulo}
      </IonButton>
    </div>
  );
};

export default BtnSubTema;
