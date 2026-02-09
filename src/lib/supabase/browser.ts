import { createBrowserClient } from '@supabase/ssr';
import type { SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient | null = null;

export function supabaseBrowser(): SupabaseClient {
  if (!supabase) {
    supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    );
  }

  return supabase;
}
