import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonLoading,
  useIonToast,
  useIonRouter,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Avatar from "../components/Avatar";
import Toolbar from "../components/Toolbar";
import DatosPerfil from "../data/DatosUsuario";

const Account = () => {
  const [showLoading, hideLoading] = useIonLoading();
  const [showToast] = useIonToast();
  const [session] = useState(() => supabase.auth.session());
  const perfil = DatosPerfil();

  const router = useIonRouter();
  const [profile, setProfile] = useState({
    username: "",
    website: "",
    avatar_url: "",
  });
  useEffect(() => {
    getProfile();
  }, [session]);
  const getProfile = async () => {
    console.log("get");

    //
    //  await showLoading();

    try {
      const user = supabase.auth.user();
      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setProfile({
          username: data.username,
          website: data.website,
          avatar_url: data.avatar_url,
        });
      }
      return null;
    } catch (error) {
      showToast({ message: error.message, duration: 5000 });
    } finally {
      await hideLoading();
    }
  };
  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/", "forward", "replace");
  };
  const updateProfile = async (e, avatar_url) => {
    e.preventDefault();

    console.log("update ");
    await showLoading();

    try {
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        ...profile,
        avatar_url: avatar_url,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });

      if (error) {
        throw error;
      }
    } catch (error) {
      showToast({ message: error.message, duration: 5000 });
    } finally {
      await hideLoading();
    }
  };
  return (
    <IonPage className="tipoLetra">
      <IonHeader class="ion-no-border">
        <Toolbar
          showBackButton={true}
          encabezado="PERFIL"
          avatarUrl={perfil.avatar_url}
          userName={perfil.username}
        />
      </IonHeader>

      <IonContent color="secondary" className="ion-padding">
        <form onSubmit={updateProfile} style={{ marginTop: "20%" }}>
          <IonItem>
            <IonLabel>
              <p>Email</p>
              <p>{session?.user?.email}</p>
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel aria-label="username" position="stacked">
              Name
            </IonLabel>
            <IonInput
              type="text"
              name="username"
              value={profile.username}
              onIonChange={(e) =>
                setProfile({ ...profile, username: e.detail.value ?? "" })
              }
            ></IonInput>
          </IonItem>

          <div className="ion-text-center">
            <IonButton fill="clear" type="submit">
              Update Profile
            </IonButton>
          </div>
        </form>

        <div className="ion-text-center">
          <IonButton fill="clear" onClick={signOut}>
            Log Out
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Account;
