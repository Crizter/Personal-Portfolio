import { useState, useEffect } from 'react';
import '../styles/Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${loading ? 'active' : 'fade-out'}`}>
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <p>Welcome to my personal portfolio</p>
      </div>
    </div>
  );
};


export default Preloader; 