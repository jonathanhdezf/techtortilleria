import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Cargar variables de entorno
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function recoverAdmin() {
    const email = "admin@techtortilleria.com";
    const password = "admin123"; // Cambia esto si usabas otra

    console.log(`Intentando registrar/recuperar acceso para: ${email}`);

    // Intentar registro directo
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
    });

    if (signUpError) {
        if (signUpError.message.includes("already registered")) {
            console.log("INFO: El usuario ya existe en Supabase Auth. Intenta resetear la contraseña en el dashboard de Supabase si la olvidaste.");
        } else {
            console.error("ERROR AL REGISTRAR:", signUpError.message);
        }
    } else {
        console.log("ÉXITO: Usuario registrado en Supabase Auth.");
        console.log("RECUERDA: Si tienes activado 'Confirm Email', debes ir al Dashboard de Supabase y marcarlo como confirmado manualmente.");
    }
}

recoverAdmin();
