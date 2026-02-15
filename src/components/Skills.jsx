import { motion } from 'framer-motion';
import { Code2, Database, Layers, Cpu, Palette, Zap } from 'lucide-react';

const skillsData = [
    { name: 'C', icon: Code2 },
    { name: 'C++', icon: Code2 },
    { name: 'JavaScript', icon: Code2 },
    { name: 'React', icon: Layers },
    { name: 'Python', icon: Cpu },
    { name: 'TensorFlow', icon: Database },
    { name: 'Node.js', icon: Zap },
    { name: 'Tailwind CSS', icon: Palette },
];

const Skills = () => {
    return (
        <section className="py-20 px-6 lg:px-20 bg-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Tech <span className="gradient-text">Stack</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Technologies I work with to build amazing experiences
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skillsData.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:border-accent-secondary/50 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                            >
                                <div className="p-3 bg-gradient-to-br from-accent-secondary/20 to-accent-glow/20 rounded-lg group-hover:from-accent-secondary/30 group-hover:to-accent-glow/30 transition-all duration-300">
                                    <Icon className="w-8 h-8 text-accent-secondary" />
                                </div>
                                <span className="font-semibold text-lg">{skill.name}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
