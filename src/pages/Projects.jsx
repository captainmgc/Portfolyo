import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  useEffect(() => {
    document.title = 'Projeler | Portfolyo';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Frontend geliştirme projelerim ve çalışmalarım.');
    }
  }, []);

  // Örnek proje verileri
  const projects = [
    {
      id: 1,
      title: 'E-Ticaret Uygulaması',
      description: 'React ve Tailwind CSS ile geliştirilmiş, tam responsive bir e-ticaret web uygulaması.',
      image: '/placeholder-project.svg',
      technologies: ['React', 'Tailwind CSS', 'Redux', 'Node.js'],
      liveUrl: 'https://demo-ecommerce.netlify.app',
      githubUrl: 'https://github.com/username/ecommerce'
    },
    {
      id: 2,
      title: 'Task Yönetim Uygulaması',
      description: 'Görevlerinizi organize etmenize yardımcı olan bir React uygulaması. Drag-and-drop özelliği ile kolay kullanım.',
      image: '/placeholder-project.svg',
      technologies: ['React', 'CSS3', 'LocalStorage', 'React DnD'],
      liveUrl: 'https://demo-taskmanager.netlify.app',
      githubUrl: 'https://github.com/username/task-manager'
    },
    {
      id: 3,
      title: 'Hava Durumu Uygulaması',
      description: 'Güncel hava durumu bilgilerini görüntüleyebileceğiniz, konum tabanlı bir web uygulaması.',
      image: '/placeholder-project.svg',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
      liveUrl: 'https://demo-weather.netlify.app',
      githubUrl: 'https://github.com/username/weather-app'
    },
    {
      id: 4,
      title: 'Portfolyo Web Sitesi',
      description: 'Frontend geliştirici portfolyo web sitesi. React, Vite ve Tailwind CSS ile geliştirildi.',
      image: '/placeholder-project.svg',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'Netlify'],
      liveUrl: 'https://demo-portfolio.netlify.app',
      githubUrl: 'https://github.com/username/portfolio'
    }
  ];

  return (
    <>
      
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Projelerim
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Frontend geliştirici olarak çalıştığım projeler. Modern web teknolojileri
            kullanarak geliştirdiğim bu projelerde, kullanıcı deneyimi ve performans
            optimizasyonlarına özen gösterdim.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Daha Fazla Proje
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              GitHub'da daha fazla projemi inceleyebilirsiniz.
            </p>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub Profilim
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects; 