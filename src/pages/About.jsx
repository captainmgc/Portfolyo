import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'Hakkımda | Portfolyo';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Frontend geliştirici olarak deneyimlerim ve becerilerim.');
    }
  }, []);

  return (
    <>
      
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Hakkımda
          </h1>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Merhaba, ben Ad Soyad!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Frontend geliştirme konusunda tutkuluyum ve son teknolojileri kullanarak modern, 
              kullanıcı dostu web uygulamaları geliştiriyorum. Kullanıcı deneyimini en üst 
              düzeye çıkarmak için UI/UX prensiplerini uygulayarak, performans odaklı ve 
              erişilebilir web siteleri oluşturuyorum.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              React.js, JavaScript, HTML5, CSS3 ve Tailwind CSS gibi modern web teknolojileri 
              konusunda deneyimliyim. Her projede, temiz ve sürdürülebilir kod yazmaya, 
              performans optimizasyonlarını göz önünde bulundurmaya ve en iyi uygulamaları 
              takip etmeye özen gösteriyorum.
            </p>
          </div>
          
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Teknik Beceriler
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
                  Frontend Teknolojileri
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Responsive Design'].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
                  Araçlar & Diğer Teknolojiler
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'VS Code', 'Figma', 'npm', 'Webpack'].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Eğitim & Deneyim
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5 shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 dark:text-white">
                  Frontend Geliştirici
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  XYZ Şirketi • 2020 - Günümüz
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Responsive web uygulamaları geliştirdim</li>
                  <li>React.js ve modern JavaScript ile çalıştım</li>
                  <li>UI/UX tasarım ekibiyle işbirliği yaptım</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5 shadow-sm">
                <h3 className="text-xl font-medium text-gray-800 dark:text-white">
                  Bilgisayar Mühendisliği
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  ABC Üniversitesi • 2016 - 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About; 