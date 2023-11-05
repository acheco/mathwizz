import { useEffect, useState, createRef } from "react";
import { IonButton, IonContent, IonHeader, IonPage } from "@ionic/react";
import { useParams } from "react-router";
import { supabase } from "../supabaseClient";
import DatosPerfil from "../data/DatosUsuario";
import Toolbar from "../components/Toolbar";
import { Link } from "react-router-dom";
import SeleccionContenido from "../components/SeleccionContenido";

const contenido = () => {
  const perfil = DatosPerfil();
  const { idSubTema } = useParams();
  const [subTemas, setSubTemas] = useState([]);
  const resetPagina = createRef();

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
      <IonHeader class="ion-no-border">
        <Toolbar
          showBackButton={true}
          encabezado="CONTENIDO"
          userName={perfil.username}
          avatarUrl={perfil.avatar_url}
        />
      </IonHeader>

      <IonContent scrollEvents={false} color="secondary" class="ion-padding">
        <h2
          style={{ textAlign: "center", fontWeight: "600", fontSize: "2rem" }}
        >
          {tituloSubTema?.f_nombre_subtema.toUpperCase()}
        </h2>

        <SeleccionContenido id={tituloSubTema?.f_id} />

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
};

export default contenido;
