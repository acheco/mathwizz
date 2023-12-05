import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const obtenerDatosPerfil = async () => {
    try {
        const user = supabase.auth.user();
        let { data, error, status } = await supabase
            .from('profiles')
            .select(`username`)
            .eq('id', user.id)
            .single();
        if (error && status !== 406) {
            throw error;
        }

        return data || null;
    } catch (error) {
        console.error("Error al obtener datos de perfil:", error);
        return null;
    }
}

const DatosPerfil = () => {
    const [perfil, setPerfil] = useState([]);

    useEffect(() => {
        const fetchDatosPerfil = async () => {
            const data = await obtenerDatosPerfil();
            if (data) {
                setPerfil(data);
            }
        };

        fetchDatosPerfil();
    }, []);

    return perfil;
}


export default DatosPerfil;