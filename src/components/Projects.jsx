import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

const ProjectCarousel = ({ title, projects, onProjectClick }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="space-y-4">
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold px-6 lg:px-20">
                {title}
            </h3>

            {/* Carousel Container */}
            <div className="relative group">
                {/* Left Scroll Button */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/5 backdrop-blur-md hover:bg-white/10 border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Scrollable Content */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto scrollbar-hide px-6 lg:px-20 py-4 scroll-smooth overscroll-x-contain"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={() => onProjectClick(project)}
                        />
                    ))}
                </div>

                {/* Right Scroll Button */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/5 backdrop-blur-md hover:bg-white/10 border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

const Projects = ({ personalProjects, hackathonProjects, onProjectClick }) => {
    return (
        <section className="py-20 space-y-12 bg-black">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center px-6 lg:px-20"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-gray-400 text-lg">
                    Explore my work across machine learning, social impact, and immersive experiences
                </p>
            </motion.div>

            {/* Personal Projects Carousel */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <ProjectCarousel
                    title="Personal Builds"
                    projects={personalProjects}
                    onProjectClick={onProjectClick}
                />
            </motion.div>

            {/* Hackathon Projects Carousel */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <ProjectCarousel
                    title="Hackathon Projects"
                    projects={hackathonProjects}
                    onProjectClick={onProjectClick}
                />
            </motion.div>
        </section>
    );
};

export default Projects;
