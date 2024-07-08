import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import Image from 'next/image';
import Link from 'next/link';
import ThemeToggler from './ThemeToggler';
const logo = '/images/logo.png';

export default function Navbar() {
  return (
    <div className='bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between items-center'>
      <Link href={'/'}>
        <Image src={logo} width={50} height={50} alt='logo' />
      </Link>

      <div className='flex items-center'>
        <ThemeToggler />
        <DropdownMenu>
          <DropdownMenuTrigger className='focus:outline-none'>
            <Avatar>
              <AvatarImage
                src={'https://github.com/shadcn.png'}
                alt='@shadcn'
              />
              <AvatarFallback className='text-black bg-slate-400'>
                CN
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={'/profile'}>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={'/auth'}>Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
