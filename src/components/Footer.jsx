import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-16 px-6 lg:px-20 bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center space-y-6">
                    {/* Title */}
                    <h3 className="text-3xl font-bold">
                        Connect <span className="gradient-text">with me</span>
                    </h3>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://github.com/jatingera"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white/5 backdrop-blur-md hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 hover:scale-110 hover:border-accent-secondary group"
                        >
                            <Github className="w-7 h-7 group-hover:text-accent-secondary transition-colors" />
                        </a>
                        <a
                            href="https://linkedin.com/in/jatingera"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white/5 backdrop-blur-md hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 hover:scale-110 hover:border-accent-secondary group"
                        >
                            <Linkedin className="w-7 h-7 group-hover:text-accent-secondary transition-colors" />
                        </a>
                        <a
                            href="mailto:jatingera123@gmail.com"
                            className="p-4 bg-white/5 backdrop-blur-md hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 hover:scale-110 hover:border-accent-secondary group"
                        >
                            <Mail className="w-7 h-7 group-hover:text-accent-secondary transition-colors" />
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="pt-8 border-t border-white/10">
                        <p className="text-gray-400 text-lg font-medium">
                            Made with React & 3D
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                            © {new Date().getFullYear()} All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
