import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    document.title = 'Anasayfa | Portfolyo';
    
    // Meta etiketlerini güncelle
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Frontend geliştirici kişisel portfolyo sitesi');
    }
  }, []);

  return (
    <>
      
      <section className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 py-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                Merhaba, ben <span className="text-blue-600 dark:text-blue-400">Ad Soyad</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Frontend geliştirici olarak modern ve kullanıcı dostu web uygulamaları tasarlıyorum.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/projects" 
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Projelerimi Görüntüle
                </Link>
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-medium rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  İletişime Geç
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                <img 
                  src="/placeholder-profile.svg" 
                  alt="Profil Resmi" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Teknik Beceriler
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design', 'Git', 'Figma'].map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-all duration-300"
              >
                <span className="text-gray-800 dark:text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/about" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              Hakkımda daha fazla bilgi
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home; 