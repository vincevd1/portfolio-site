export default function Link({
    href,
    onClick,
    children,
}: {
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
}) {
    return (
        <a
            target="_blank"
            rel="noreferrer noopener"
            href={href}
            onClick={onClick}
            className="text-gray-200 hover:text-sky-500 hover:cursor-pointer"
        >
            {children}
        </a>
    );
}
