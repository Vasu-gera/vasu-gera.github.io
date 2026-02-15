import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 50 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-[90%] sm:w-[85%] md:max-w-3xl lg:max-w-4xl max-h-[90vh] overflow-y-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl custom-scrollbar"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 bg-white/5 backdrop-blur-md hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 hover:scale-110"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Header Image */}
                    <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden rounded-t-2xl">
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">
                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                            {project.title}
                        </h2>

                        {/* Description */}
                        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                            {project.longDescription}
                        </p>

                        {/* Tech Stack */}
                        <div className="space-y-3">
                            <h3 className="text-lg sm:text-xl font-semibold text-accent-secondary">
                                Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                {project.techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 border border-white/20 rounded-lg text-xs sm:text-sm font-medium hover:border-accent-secondary/50 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* GitHub Link */}
                        <div className="pt-4">
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent-secondary to-accent-glow hover:from-accent-secondary/80 hover:to-accent-glow/80 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-accent-glow/50"
                            >
                                <Github className="w-5 h-5" />
                                View on GitHub
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
