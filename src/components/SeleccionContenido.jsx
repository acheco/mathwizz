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
      break;
    case 2:
      return <AreaCuerposRedondos />;
      break;
    case 3:
      return <TeoremaFundamentalTriángulo />;
      break;
    case 4:
      return <ConceptoIntervalo />;
      break;
    case 5:
      return <IgualdadEcuaciones />;
      break;
    case 6:
      return <ElementosTermino />;
      break;
    case 7:
      return <ExpresionesAlgebraicas />;
      break;
    case 8:
      return <LenguajeOrdinarioAlgebraico />;
      break;
    case 9:
      return <DesigualdadInecuaciones />;
      break;
    case 10:
      return <ConceptoClasificaciónNúmerosReales />;
      break;
    case 11:
      return <NúmerosRealesNúmerosIrracionales />;
      break;
    case 12:
      return <PatronesNuméricos />;
      break;
    case 13:
      return <PropiedadesGeneralesNúmerosReales />;
  }
};

export default SeleccionContenido;
