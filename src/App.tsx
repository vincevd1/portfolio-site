import Cursor from './components/cursor.component';
import Header from './components/header.component';

import { ExternalLink } from 'lucide-react';
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
            <Cursor></Cursor>
            <div className="w-full h-full px-25 flex justify-center ">
                <div className="max-w-330 flex gap-10 z-5 relative">
                    <div className="sticky top-0 h-screen flex-1 flex flex-col justify-between py-25">
                        <div>
                            <Header />
                            <a
                                href="mailto:me@vincevandiermen.nl"
                                className="w-fit mt-4 py-3 flex gap-2 items-center outline-1
                                            px-6 rounded-2xl outline-sky-500 text-sky-500 
                                            hover:bg-sky-500 hover:text-gray-950 hover:outline-offset-2
                                            hover:outline-2"
                            >
                                Get in touch! <ExternalLink size={16} />
                            </a>
                            {/* <Modal
                                title="Contact me"
                                buttonContent={
                                    <>
                                        Get in touch! <ExternalLink size={16} />
                                    </>
                                }
                                className="mt-4 py-2 flex gap-2 items-center"
                            >
                                <ContactForm/>
                            </Modal> */}
                        </div>
                        <div className="w-fit flex flex-col gap-3">
                            <NavItem isActive={sectionIndex === 0} label="ABOUT" href="#about" />
                            <NavItem isActive={sectionIndex === 1} label="CAREER" href="#career" />
                            <NavItem
                                isActive={sectionIndex === 2}
                                label="PROJECTS"
                                href="#projects"
                            />
                        </div>
                        <div className="flex w-full gap-5">
                            <SocialButtons />
                        </div>
                    </div>
                    <div className="flex-1 py-25">
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
