import { ExternalLink } from 'lucide-react';
import SocialButtons from './socialButtons.component';

export default function Header() {
    return (
        <div className="flex flex-col gap-3">
            <h4 className="md:text-xl font-jb-mono">Hello World! I'm</h4>
            <h1 className="text-4xl md:text-6xl font-bold">Vince van Diermen</h1>
            <h2 className="text-lg md:text-2xl">Junior Software Developer @ ConnectedCare</h2>
            <h3 className="text-sm md:text-md max-w-lg text-gray-500">
                I'm an experienced software developer, interested in creating scalable and efficient
                solutions.
            </h3>
            <div className="w-full flex justify-between items-center">
                <a
                    href="mailto:me@vincevandiermen.nl"
                    className="w-fit mt-1 py-2 md:py-3 flex gap-2 items-center outline-1
                                                        px-6 rounded-2xl outline-sky-500 text-sky-500 
                                                        hover:bg-sky-500 hover:text-gray-950 hover:outline-offset-2
                                                        hover:outline-2"
                >
                    Get in touch! <ExternalLink size={16} />
                </a>
                <SocialButtons className="md:hidden" />
            </div>
        </div>
    );
}
