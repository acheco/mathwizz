import { useEffect, useState } from "react";
import { IonButton, IonContent, IonHeader, IonPage } from "@ionic/react";
import { useParams } from "react-router";
import { supabase } from "../supabaseClient";
import DatosPerfil from "../data/DatosUsuario";
import Toolbar from "../components/Toolbar";
import { Link } from "react-router-dom";

// Import de Contenido de los subtemas
import PropiedadesGeneralesNúmerosReales from "../components/PropiedadesGeneralesNúmerosReales";
import IgualdadEcuaciones from "../components/IgualdadEcuaciones";
import ExpresionesAlgebraicas from "../components/ExpresionesAlgebraicas";
import LenguajeOrdinarioAlgebraico from "../components/LenguajeOrdinarioAlgebraico";
import DesigualdadInecuaciones from "../components/DesigualdadInecuaciones";

const contenido = () => {
  const [contenido, setContenido] = useState([]);
  const perfil = DatosPerfil();
  const { idSubTema } = useParams();
  const [subTemas, setSubTemas] = useState([]);

  //-- CONSULTA PARA EL CONTENIDO DE LOS SUBTEMAS --//

  useEffect(() => {
    async function fetchContenidoSubtema() {
      try {
        const { data, error } = await supabase
          .from("t_contenido_subtema")
          .select("*")
          .eq("f_id_subtema", idSubTema);
        if (error) {
          console.error(
            "Error al obtener datos de la tabla t_temas:",
            error.message
          );
          return;
        }
        setContenido(data || []);
      } catch (error) {
        console.log("Error fetching content:", error);
      }
    }
    fetchContenidoSubtema();
  }, [idSubTema]);

  //-- MOSTRAR TITULO DE LOS SUBTEMAS --//
  useEffect(() => {
    async function fetchTituloSubtema() {
      try {
        const { data, error } = await supabase
          .from("t_sub_temas")
          .select("f_id, f_nombre_subtema")
          .eq("f_id", idSubTema);
        if (error) console.log("error", error);
        else setSubTemas(data);
      } catch (error) {
        console.log("Error fetching content:", error);
      }
    }
    fetchTituloSubtema();
  }, [idSubTema]);

  const tituloSubTema = subTemas[0];

  return (
    <IonPage>
      <IonHeader>
        <Toolbar
          showBackButton={true}
          encabezado="CONTENIDO"
          userName={perfil.username}
          avatarUrl={perfil.avatar_url}
        />
      </IonHeader>

      <IonContent class="ion-padding">
        <h2
          style={{ textAlign: "center", fontWeight: "600", fontSize: "2rem" }}
        >
          {tituloSubTema?.f_nombre_subtema.toUpperCase()}
        </h2>

        <ExpresionesAlgebraicas />
        {subTemas.map((data) => (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Link key={data.f_id} to={`/cuestionario/${data.f_id}`}>
              <IonButton size="large">Resolver Cuestionario</IonButton>
            </Link>
          </div>
        ))}
      </IonContent>
    </IonPage>
  );
                <PropiedadesGeneralesNúmerosReales />
                {
                    subTemas.map((data) => (
                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                            <Link
                                key={data.f_id}
                                to={`/cuestionario/${data.f_id}`}
                            >
                                <IonButton size="large">Resolver Cuestionario</IonButton>
                            </Link>

                        </div>

                    ))
                }

            </IonContent>
        </IonPage >
    );
};

export default contenido;
