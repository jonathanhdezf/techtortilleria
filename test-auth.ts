import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Manual env loading if needed
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testLogin() {
    console.log("Testing login for: admin@techtortilleria.com");
    console.log("URL:", supabaseUrl);

    // Attempt login with a dummy password to see the error type
    const { data, error } = await supabase.auth.signInWithPassword({
        email: "admin@techtortilleria.com",
        password: "wrong_password_test"
    });

    if (error) {
        console.log("LOGIN_ERROR:", JSON.stringify(error, null, 2));
    } else {
        console.log("LOGIN_SUCCESS (unexpected with wrong password)");
    }
}

testLogin();
