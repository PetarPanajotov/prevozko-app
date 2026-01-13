import { CircleUser } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';

export function UserNav() {
  /*TODO: Translation */
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="data-[state=open]:focus:bg-primary/50 data-[state=open]:hover:bg-primary data-[state=open]:bg-primary/50 hover:bg-transperant flex cursor-pointer items-center gap-1 bg-transparent text-white focus:bg-transparent">
            <CircleUser color="white" size={28} />
            <h6 className="text-white">Профил</h6>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="border-b px-2 pb-2">
              <h6>petarpanajotov@gmail.com</h6>
            </div>
            <NavigationMenuLink>
              <h6>Услуги</h6>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <h6>Чат</h6>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <h6>Настройки</h6>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
