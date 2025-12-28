export default function SectionHeading({ title }: { title: string }) {
    return (
        <div className="sticky md:hidden top-0 z-20 -mx-5 px-5 w-screen h-16 backdrop-blur-xl flex items-center gap-2">
            <span className="tracking-wider font-bold text-sm">{title}</span>
            <span className="h-px w-12 bg-gray-400"></span>
        </div>
    );
}
