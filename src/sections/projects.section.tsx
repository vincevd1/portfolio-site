import ExperienceItem from '../components/experienceItem.component';
import PortfolioSiteImage from '../assets/images/portfolio_site.png';
import SectionHeading from '../components/sectionHeading.component';

export default function ProjectSection({ className }: { className: string }) {
    return (
        <section id="projects" className={`${className} group/list`}>
            <SectionHeading title="PROJECTS" />
            <ExperienceItem
                title="Portfolio Website"
                description="This site was made with React, Tailwind and Lucide icons.
                It gave me the chance to apply the new skills I learned on a project of my own.
                And unlike most of my passion projects, I actually finished it!"
                image={PortfolioSiteImage}
                skills={['React', 'Typescript', 'TailwindCSS']}
                // href="https://connectedcare.nl/"
            />
        </section>
    );
}
