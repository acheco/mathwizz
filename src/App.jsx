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
import { supabase } from "./supabaseClient";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import Temas from "./pages/Temas";
import SubTemas from "./pages/SubTemas";
import Puntuacion from "./pages/Puntuacion";
import Account from "./pages/Account";


setupIonicReact();

const App = () => {

  const [session, setSession] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.getSession({ data: { session } }))
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (session) {
        setUserId(session.user.id);
        console.log(userId);
      }

    })
  }, [])

  /*
 
  const history = useHistory();
  useEffect(() => {
    async (e) => {
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
*/


  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>

          <Route
            exact
            path="/"
            render={() => {
              return session ? <Redirect to="/account" /> : <LoginPage />
            }}
          />

          <Route exact path="/account">
            <Account />
          </Route>

          <Route exact path="/temas" component={Temas} />
          <Route exact path="/subtemas/:idTema" component={SubTemas} />
          <Route exact path="/contenido/:idSubTema" component={Contenidos} />
          <Route
            exact
            path="/cuestionario/:idCuestionario"
            component={Cuestionario}
          />
          <Route exact path="/puntuacion/:puntuacion" component={Puntuacion} />

          <Route exact path="/account">
            <Account />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
