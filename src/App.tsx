import { Redirect, Route, useHistory } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Cuestionario from "./pages/Cuestionario";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Contenidos from "./pages/Contenidos";
import { useEffect, useState } from "react";
import { supabase } from "./lib/helper/supabaseClient";
import "./theme/variables.css";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Temas from "./pages/Temas";
import SubTemas from "./pages/SubTemas";

setupIonicReact();

const App: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await supabase.auth.onAuthStateChange((event, session) => {
        if (!session) {
          history.push("/contenido");
        } else {
          history.push("/login");
        }
      });
    };
  });

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/temas" component={Temas} />
          <Route exact path="/subtemas/:idTema" component={SubTemas} />
          <Route exact path="/contenido/:idSubTema" component={Contenidos} />
          <Route
            exact
            path="/cuestionario/:idCuestionario"
            component={Cuestionario}
          />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
