import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className="flex-shrink-0 w-80 cursor-pointer group"
        >
            <div className="relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent-glow/50 hover:bg-white/10 transition-all duration-300">
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-3">
                    <h3 className="text-xl font-bold line-clamp-1 group-hover:text-accent-secondary transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">
                        {project.shortDescription}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map((tech, index) => (
                            <span
                                key={index}
                                className="text-xs px-2 py-1 bg-white/10 border border-white/20 rounded-md text-accent-secondary"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.techStack.length > 3 && (
                            <span className="text-xs px-2 py-1 text-gray-500">
                                +{project.techStack.length - 3} more
                            </span>
                        )}
                    </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary/10 via-accent-glow/10 to-accent-primary/10"></div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
