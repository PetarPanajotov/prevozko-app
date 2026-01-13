import { supabaseServer } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { signOut } from '@/app/[locale]/login/actions';

export default async function AppPage() {
  const supabase = await supabaseServer();
  const { data } = await supabase.auth.getUser();

  if (!data.user) redirect('/login');

  return (
    <main style={{ maxWidth: 720, margin: '60px auto', padding: 16 }}>
      <h1>Protected page</h1>
      <pre>{JSON.stringify(data.user, null, 2)}</pre>

      <form action={signOut}>
        <button type="submit">Sign out</button>
      </form>
    </main>
  );
}
