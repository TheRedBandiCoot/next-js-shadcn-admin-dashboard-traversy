import { ArrowLeftCircle } from 'lucide-react';
import Link from 'next/link';

type BackButtonPros = {
  text: string;
  link: string;
};

export default function BackButton({ link, text }: BackButtonPros) {
  return (
    <Link
      href={link}
      className='text-gray-500 hover:underline flex items-center gap-1 font-bold mb-5'
    >
      <ArrowLeftCircle size={18} /> {text}
    </Link>
  );
}
