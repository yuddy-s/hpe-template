import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Menu from './pages/Menu.tsx';
import Order from './pages/Order.tsx';
import Contact from './pages/Contact.tsx';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#home');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '#home': return <Home />;
      case '#menu': return <Menu />;
      case '#order': return <Order />;
      case '#contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPath={currentPath} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
