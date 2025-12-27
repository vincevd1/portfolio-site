export default function SocialIcon({
    className,
    href,
    children,
}: {
    className?: string;
    href?: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className={`w-8 h-8 [&>svg]:fill-gray-400 outline-sky-500 hover:[&>svg]:fill-sky-500 hover:outline-2 hover:outline-offset-2 ${className}`}
        >
            {children}
        </a>
    );
}
