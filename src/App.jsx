import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';
import { client } from './lib/sanity';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [personalProjects, setPersonalProjects] = useState([]);
  const [hackathonProjects, setHackathonProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // GROQ query to fetch all projects with direct image URL
    const query = `*[_type == "project"]{
      title,
      category,
      shortDescription,
      longDescription,
      "imageUrl": mainImage.asset->url,
      githubLink,
      techStack
    }`;

    client.fetch(query)
      .then((projects) => {
        // Add ID and ensure imageUrl has fallback
        const processedProjects = projects.map((project, index) => ({
          ...project,
          id: project._id || `project-${index}`,
          imageUrl: project.imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'
        }));

        // Split projects by category
        const personal = processedProjects.filter(p => p.category === 'personal');
        const hackathon = processedProjects.filter(p => p.category === 'hackathon');

        setPersonalProjects(personal);
        setHackathonProjects(hackathon);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Skills />
      <Projects
        personalProjects={personalProjects}
        hackathonProjects={hackathonProjects}
        onProjectClick={handleProjectClick}
      />
      <Footer />

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App

