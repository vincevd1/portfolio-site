export default function NavItem({
    isActive,
    className,
    label,
    href,
}: {
    isActive?: boolean;
    className?: string;
    label: string;
    href: string;
}) {
    return (
        <a
            href={href}
            className={`${className} ${
                isActive ? 'text-gray-300 pl-15' : ''
            } relative group pl-9 tracking-wider transition-all duration-300 lg:hover:pl-15 lg:hover:text-gray-300 hover:cursor-pointer`}
        >
            <span
                className={`${
                    isActive ? 'bg-gray-300 w-12' : 'bg-gray-400 '
                } absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 transition-all duration-300 lg:group-hover:w-12 lg:group-hover:bg-gray-300`}
            />
            {label}
        </a>
    );
}
