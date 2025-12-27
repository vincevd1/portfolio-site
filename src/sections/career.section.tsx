import ExperienceItem from '../components/experienceItem.component';

export default function CareerSection({ className }: { className: string }) {
    return (
        <section id="career" className={`${className} group/list`}>
            <ExperienceItem
                startString="SEP 2025"
                title="Commissioner of Internal Affairs · S.V. Thalia"
                description="As part of the job I managed event planning and operations, coordinated committees, represented the board externally, 
                        and served as the main contact for members."
                skills={[
                    'Operational Management',
                    'Strategic Planning',
                    'Administration',
                    'Professionality',
                ]}
                href="https://thalia.nu/"
            />
            <ExperienceItem
                startString="DEC 2024"
                title="Junior Software Developer · ConnectedCare"
                description="I worked on some awesome projects like HappyPlant, which is part of the
                        SmartChange research project funded by the European Union, and LizzHealth,
                        which is a digital assistant for seniors."
                skills={['React', 'Typescript', 'React Native', 'Expo', 'Sprint', 'Figma']}
                href="https://connectedcare.nl/"
            />
        </section>
    );
}
