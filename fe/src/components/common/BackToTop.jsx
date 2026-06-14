import React, { useEffect, useState } from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 hover:shadow-red-600/50 transition-all duration-300 transform hover:-translate-y-1 group"
          aria-label="Back to top"
        >
          <ArrowUpOutlined className="text-xl md:text-2xl font-bold group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};

export default BackToTop;