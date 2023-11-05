// Import de Contenido de los subtemas
// Temas Geometria
import PlanoCartesiano from "../components/PlanoCartesiano";
import AreaCuerposRedondos from "./AreaCuerposRedondos";
import TeoremaFundamentalTriángulo from "./TeoremaFundamentalTriangulo";
// temas Algebra
import ConceptoIntervalo from "./Conceptodeintervalo";
import IgualdadEcuaciones from "../components/IgualdadEcuaciones";
import ElementosTermino from "../components/ElementosTermino";
import ExpresionesAlgebraicas from "../components/ExpresionesAlgebraicas";
import LenguajeOrdinarioAlgebraico from "../components/LenguajeOrdinarioAlgebraico";
import DesigualdadInecuaciones from "../components/DesigualdadInecuaciones";
// Temas Numeracion
import ConceptoClasificaciónNúmerosReales from "./ConceptoClasificacionNumerosReales";
import NúmerosRealesNúmerosIrracionales from "./NumerosRealesNumerosIrracionales";
import PatronesNuméricos from "./PatronesNuméricos";
import PropiedadesGeneralesNúmerosReales from "./PropiedadesGeneralesNúmerosReales";

const SeleccionContenido = ({ id }) => {
  switch (id) {
    case 1:
      return <PlanoCartesiano />;
    case 2:
      return <AreaCuerposRedondos />;
    case 3:
      return <TeoremaFundamentalTriángulo />;
    case 4:
      return <ConceptoIntervalo />;
    case 5:
      return <IgualdadEcuaciones />;
    case 6:
      return <ElementosTermino />;
    case 7:
      return <ExpresionesAlgebraicas />;
    case 8:
      return <LenguajeOrdinarioAlgebraico />;
    case 9:
      return <DesigualdadInecuaciones />;
    case 10:
      return <ConceptoClasificaciónNúmerosReales />;
    case 11:
      return <NúmerosRealesNúmerosIrracionales />;
    case 12:
      return <PatronesNuméricos />;
    case 13:
      return <PropiedadesGeneralesNúmerosReales />;
  }
};

export default SeleccionContenido;
