import Glow from './components/glow.component';
import Header from './components/header.component';

import SocialButtons from './components/socialButtons.component';
import NavItem from './components/navItem.component';
import ScrollableSections from './components/scrollableSections.component';
import { useState } from 'react';
import AboutSection from './sections/about.section';
import CareerSection from './sections/career.section';
import ProjectsSection from './sections/projects.section';
import Footer from './components/footer.component';

function App() {
    const [sectionIndex, setSectionIndex] = useState(0);

    return (
        <div
            id="app"
            className="w-full bg-gray-950 text-gray-400 font-inter selection:text-gray-950 selection:bg-sky-500"
        >
            <Glow />
            <div className="w-full h-full px-5 md:px-25 flex justify-center ">
                <div className="max-w-330 md:flex gap-10 z-5 relative">
                    <div className="md:sticky top-0 md:h-screen flex-1 flex flex-col justify-between py-10 md:py-25">
                        <Header />
                        <div className="w-fit hidden md:flex flex-col gap-3">
                            <NavItem isActive={sectionIndex === 0} label="ABOUT" href="#about" />
                            <NavItem isActive={sectionIndex === 1} label="CAREER" href="#career" />
                            <NavItem
                                isActive={sectionIndex === 2}
                                label="PROJECTS"
                                href="#projects"
                            />
                        </div>
                        <SocialButtons className="hidden md:flex" />
                    </div>
                    <div className="flex-1 py-15 md:py-25">
                        <ScrollableSections setSection={setSectionIndex}>
                            <AboutSection className="scroll-mt-25 mb-25" />
                            <CareerSection className="scroll-mt-25 mb-25" />
                            <ProjectsSection className="scroll-mt-25 mb-25" />
                        </ScrollableSections>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
