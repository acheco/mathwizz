import { IonButton } from "@ionic/react";

interface TituloSubTema {
  titulo: string;
}

const BtnSubTema: React.FC<TituloSubTema> = ({ titulo }) => {
  return (
    <div>
      <IonButton className="btnTitulo" expand="block">
        {titulo}
      </IonButton>
    </div>
  );
};

export default BtnSubTema;
