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
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import Temas from "./pages/Temas";
import SubTemas from "./pages/SubTemas";
import Puntuacion from "./pages/Puntuacion";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Contenidos from "./pages/Contenido";

setupIonicReact();

const App = () => {
  const [session, setSession] = useState(null);
  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route
            exact
            path="/"
            render={() => {
              return session ? <Redirect to="/temas" /> : <Login />;
            }}
          />
          <Route exact path="/temas" component={Temas} />

          <Route exact path="/account" component={Account} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/subtemas/:idTema" component={SubTemas} />
          <Route exact path="/contenido/:idSubTema" component={Contenidos} />
          <Route
            exact
            path="/cuestionario/:idCuestionario"
            component={Cuestionario}
          />
          <Route exact path="/puntuacion/:puntuacion" component={Puntuacion} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
