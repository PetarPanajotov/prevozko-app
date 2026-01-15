import { Button } from '../ui/button';
import { Bell } from 'lucide-react';
import { UserNav } from './user-nav';
import { Link } from '@/i18n/routing';

export function NavBar() {
  /*TODO: Translation */
  return (
    <nav className="flex justify-between bg-slate-800 p-4">
      <Link href="/" className="hover:no-underline">
        <div className="flex items-baseline gap-2">
          <h1
            className="text-3xl font-black text-transparent italic"
            style={{ WebkitTextStroke: '1px white' }}
          >
            ПРЕВОЗКО
          </h1>
          <span className="-rotate-2 transform rounded bg-orange-500 px-1.5 py-0.5 text-[10px] font-black tracking-tighter text-slate-900 uppercase">
            Cargo
          </span>
        </div>
      </Link>
      <div className="flex items-center justify-center gap-6">
        <Bell color="white" size={28} />
        <div className="flex items-center gap-2">
          <UserNav />
        </div>
        <Link href="/services/create">
          <Button variant="default">Добави услуга</Button>
        </Link>
      </div>
    </nav>
  );
}
