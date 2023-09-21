import { IonButton } from "@ionic/react";

interface TituloTema {
  titulo: string;
}

const BtnTema: React.FC<TituloTema> = ({ titulo }) => {
  return (
    <div>
      <IonButton className="btnTitulo" expand="block">
        {titulo}
      </IonButton>
    </div>
  );
};

export default BtnTema;
