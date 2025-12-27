import { ArrowRight } from 'lucide-react';

export default function ContactForm() {
    return (
        <form
            action="https://formspree.io/f/xregqoob"
            method="post"
            className="mt-4 flex flex-col gap-4"
        >
            <input
                type="email"
                name="email"
                placeholder="Your email"
                className="py-2 px-4 w-full h-12 bg-gray-800/50 rounded-md"
            />
            <textarea
                name="message"
                placeholder="Your message"
                className="p-4 w-full h-64 resize-none bg-gray-800/50 rounded-md"
            />
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="group flex gap-1 justify-center items-center h-12 w-32 rounded-md bg-sky-500 text-white hover:cursor-pointer"
                >
                    Send{' '}
                    <ArrowRight
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                </button>
            </div>
        </form>
    );
}
