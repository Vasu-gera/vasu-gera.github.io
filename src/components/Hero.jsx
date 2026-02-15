import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { client } from '../lib/sanity';

const Hero = () => {
    const [settings, setSettings] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch site settings from Sanity
        const query = `*[_type == "siteSettings"][0]{name, bio, github, linkedin, email}`;

        client.fetch(query)
            .then((data) => {
                setSettings(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching site settings:', error);
                setLoading(false);
            });
    }, []);

    // Default fallback values
    const displayName = settings?.name || "Vasu's Tech";
    const displayBio = settings?.bio || "Computer Science student at Chandigarh University building innovative solutions. Specializing in Machine Learning models, leading hackathon teams, and crafting accessible design systems.";
    const githubUrl = settings?.github || "https://github.com/jatingera";
    const linkedinUrl = settings?.linkedin || "https://linkedin.com/in/jatingera";
    const emailAddress = settings?.email || "jatingera123@gmail.com";

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            {/* 3D Background Layer - Full Screen Spline Scene */}
            <div className="absolute inset-0 z-0 scale-[6] sm:scale-[4] md:scale-[3] lg:scale-[2.5] pointer-events-auto">
                <Spline scene="https://prod.spline.design/IiJKRNstzBW7xhac/scene.splinecode" />
            </div>

            {/* Floating Content Layer - Text on Top */}
            <motion.div
                className="relative z-10 flex flex-col justify-center h-full max-w-4xl px-10 sm:px-12 md:px-16 lg:px-24 pointer-events-none"
                animate={{ y: [0, -10, 0] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >

                {/* Title */}
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6"
                    style={{ textShadow: '0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(139,92,246,0.2)' }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Welcome to{' '}
                    <span className="gradient-text" style={{ textShadow: '0 0 15px rgba(139,92,246,0.5), 0 0 30px rgba(139,92,246,0.3)' }}>
                        {displayName}
                    </span>
                </motion.h1>

                {/* Bio */}
                <motion.p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    {displayBio}
                </motion.p>

                {/* Social Links - Clickable */}
                <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pointer-events-auto p-3 bg-dark-card/80 hover:bg-dark-hover border border-dark-border rounded-lg transition-all duration-300 hover:scale-110 hover:border-accent-secondary backdrop-blur-sm"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pointer-events-auto p-3 bg-dark-card/80 hover:bg-dark-hover border border-dark-border rounded-lg transition-all duration-300 hover:scale-110 hover:border-accent-secondary backdrop-blur-sm"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href={`mailto:${emailAddress}`}
                        className="pointer-events-auto p-3 bg-dark-card/80 hover:bg-dark-hover border border-dark-border rounded-lg transition-all duration-300 hover:scale-110 hover:border-accent-secondary backdrop-blur-sm"
                    >
                        <Mail className="w-6 h-6" />
                    </a>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default Hero;
