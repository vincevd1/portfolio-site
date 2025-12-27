import { Heart } from 'lucide-react';
import Link from '../components/link.component';

export default function Footer() {
    return (
        <div className="text-sm text-center">
            This site was made with{' '}
            <span className="relative group hover:text-pink-500 hover:cursor-default">
                love{' '}
                <Heart
                    size={12}
                    className="absolute right-0 top-0 opacity-0 scale-50 -translate-x-1 translate-y-1 transition-transform duration-300
                   group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 group-hover:scale-100"
                ></Heart>
            </span>{' '}
            using <Link href="https://react.dev/">React</Link>,{' '}
            <Link href="https://tailwindcss.com/">Tailwind</Link> and using{' '}
            <Link href="https://lucide.dev/">Lucide</Link> icons.
        </div>
    );
}
