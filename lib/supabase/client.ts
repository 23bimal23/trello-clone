import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANNON_KEY!;

    return createBrowserClient(supabaseUrl, supabaseAnonKey);
}