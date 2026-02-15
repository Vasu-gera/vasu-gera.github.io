// Personal Projects Data
export const personalProjects = [
    {
        id: 'traffic-sign-detection',
        title: 'Traffic Sign Detection',
        shortDescription: 'Real-time traffic sign detection using deep learning',
        longDescription: 'A comprehensive machine learning model that detects and classifies traffic signs in real-time using convolutional neural networks. The system achieves 95% accuracy on the German Traffic Sign Recognition Benchmark (GTSRB) dataset and can process video streams at 30 FPS. Implemented data augmentation techniques and transfer learning to improve model robustness across different lighting conditions and viewing angles.',
        techStack: ['Python', 'TensorFlow', 'OpenCV', 'NumPy', 'Keras', 'CNN'],
        githubLink: 'https://github.com/vasu/traffic-sign-detection',
        imageUrl: 'https://images.unsplash.com/photo-1569144157591-c60f3f82f137?w=800&q=80'
    },
    {
        id: 'co2-emission-predictor',
        title: 'CO2 Emission Predictor',
        shortDescription: 'Predict vehicle CO2 emissions using ML regression models',
        longDescription: 'An advanced regression model that predicts CO2 emissions from vehicles based on engine specifications, fuel type, and driving patterns. Utilized ensemble methods including Random Forest and Gradient Boosting to achieve R² score of 0.92. The model helps manufacturers and consumers make informed decisions about vehicle environmental impact. Features include interactive visualizations and what-if analysis tools.',
        techStack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'XGBoost'],
        githubLink: 'https://github.com/vasu/co2-emission-predictor',
        imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80'
    }
];

// Hackathon Projects Data
export const hackathonProjects = [
    {
        id: 'civic-script',
        title: 'Civic Script',
        shortDescription: 'Empowering neurodiverse individuals with AI-powered social navigation',
        longDescription: 'Winner of the Social Impact category at HackIndia 2024. Civic Script is a comprehensive mobile application designed to empower neurodiverse individuals and rural artisans through AI-powered features. Includes predictive social navigation with quest-based interactions, non-verbal emergency communication system, voice-to-marketplace for artisan economic empowerment, and real-time translation services. Built with accessibility-first design principles and sensory-safe UI patterns.',
        techStack: ['React Native', 'Node.js', 'TensorFlow Lite', 'Firebase', 'Google Cloud AI', 'Expo'],
        githubLink: 'https://github.com/vasu/civic-script',
        imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80'
    },
    {
        id: 'prashikshan',
        title: 'Prashikshan',
        shortDescription: 'AR-powered skill development platform for rural communities',
        longDescription: 'Runner-up at TechForGood Hackathon 2024. Prashikshan leverages augmented reality to provide immersive skill training for rural communities. Features include AR-guided tutorials for traditional crafts, real-time mentor feedback through computer vision, gamified learning paths, and offline-first architecture for low-connectivity areas. The platform has trained over 500 artisans in pilot programs across 3 states, improving their income by an average of 40%.',
        techStack: ['Unity', 'ARCore', 'Python', 'Flask', 'PostgreSQL', 'WebRTC', 'Computer Vision'],
        githubLink: 'https://github.com/vasu/prashikshan',
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
    }
];
