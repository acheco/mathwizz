import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const obtenerPuntuacion = async () => {
  try {
    const user = supabase.auth.user();
    let { data, error, status } = await supabase
      .from("historial_cuestionario")
      .select(`id_sub_tema, puntuacion`)
      .eq("id_usuario", user.id);

    if (error && status !== 406) {
      throw error;
    }

    // Organiza los datos de puntuación en un objeto donde las claves son los IDs de los subtemas.
    const puntuacionObj = {};
    if (data) {
      data.forEach((item) => {
        puntuacionObj[item.id_sub_tema] = item.puntuacion;
      });
    }

    return puntuacionObj;
  } catch (error) {
    console.error("Error al obtener puntuación:", error);
    return {};
  }
};

const DatosPuntuacion = () => {
  const [puntuacion, setPuntuacion] = useState({});

  useEffect(() => {
    const fetchPuntuacion = async () => {
      const data = await obtenerPuntuacion();
      if (data) {
        setPuntuacion(data);
      }
    };

    fetchPuntuacion();
  }, []);

  return puntuacion;
};

export default DatosPuntuacion;
