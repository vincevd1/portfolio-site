import Link from '../components/link.component';
import ProfilePhoto from '../assets/images/pfp.jpg';
import SectionHeading from '../components/sectionHeading.component';

export default function AboutSection({ className }: { className?: string }) {
    return (
        <section id="about" className={`${className} text-justify`}>
            <SectionHeading title="ABOUT" />
            <div className="relative float-right w-[35%] sm:w-[25%] mt-2 mr-2 ml-8 mb-2 rounded-md overflow-hidden outline-1 outline-offset-2 outline-sky-500">
                <img src={ProfilePhoto} alt="PFP" className="w-full" />
                <div className="absolute inset-0 bg-sky-500/35"></div>
            </div>
            <div>
                I'm an experienced software developer with a strong interest in building scalable
                and efficient solutions. I study Computer Science at{' '}
                <Link href="https://www.ru.nl/en/education/bachelors/computing-science">
                    Radboud University
                </Link>
                , where I have learned about a wide range of topics like cyber security, data
                science and software science. Alongside my studies, I actively contribute to{' '}
                <Link href="https://www.thalia.nu/">study association Thalia</Link>, supporting
                initiatives that improve students' (academic) careers and connect them with each
                other.
            </div>
            <div className="mt-4">
                I currently work at <Link href="https://connectedcare.nl/">ConnectedCare</Link>{' '}
                where I continue to develop my teamworking, designing and programming skills. Here,
                I work on some awesome{' '}
                <Link href="https://connectedcare.nl/projects/">projects</Link> like HappyPlant,
                which is part of the SmartChange research project funded by the European Union, and
                LizzHealth, which is a digital assistant for seniors. I'm always learning more and I
                love to do so!
            </div>
            <div className="mt-4">
                Outside of my academic and professional pursuits, I value staying active and
                maintaining a balanced lifestyle. I enjoy running and playing squash, as well as
                spending time with friends and socializing. When I have some downtime, I also like
                to relax by playing video games occasionally. Apart from that I really like coding
                as a hobby as well so I often start on fun side projects!
            </div>
            <div className="mt-4">
                I'm always open for a chat, so don't hesitate to{' '}
                <Link href="mailto:me@vincevandiermen.nl">contact me</Link>!
            </div>
        </section>
    );
}
