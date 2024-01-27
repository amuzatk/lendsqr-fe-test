import { useEffect } from 'react';

const TawkToWidget = () => {
  useEffect(() => {
    const tawkToScript = document.createElement('script');
    tawkToScript.src = 'https://embed.tawk.to/64b56ed8cc26a871b028f37a/1h5ibhvun';
    tawkToScript.async = true;
    document.body.appendChild(tawkToScript);
    return () => {
      document.body.removeChild(tawkToScript);
    };
  }, []);

  return null;
};

export default TawkToWidget;
