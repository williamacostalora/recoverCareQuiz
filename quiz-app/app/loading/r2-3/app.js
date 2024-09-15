import Router from 'next/router';
import { useState, useEffect } from 'react';
import { BarLoader } from 'react-spinners';
import './globals.css'; // Import global styles

function MyApp({ Component, pageProps }) {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let timer;

        const handleRouteChangeStart = () => {
            setIsLoading(true); 
            setProgress(0); 

            // Gradually increase the progress every 50ms
            timer = setInterval(() => {
                setProgress((prev) => Math.min(prev + 1, 100));
            }, 50); // 50ms interval, adjust for smoother/faster animation
        };

        const handleRouteChangeComplete = () => {
            clearInterval(timer); 
            setProgress(100); // Complete the loader
            setTimeout(() => setIsLoading(false), 500); // Give some time to finish animation
        };

        const handleRouteChangeError = () => {
            clearInterval(timer); 
            setIsLoading(false); 
        };

        Router.events.on('routeChangeStart', handleRouteChangeStart);
        Router.events.on('routeChangeComplete', handleRouteChangeComplete);
        Router.events.on('routeChangeError', handleRouteChangeError);

        return () => {
            Router.events.off('routeChangeStart', handleRouteChangeStart);
            Router.events.off('routeChangeComplete', handleRouteChangeComplete);
            Router.events.off('routeChangeError', handleRouteChangeError);
            clearInterval(timer); // Cleanup timer
        };
    }, []);

    return (
        <>
            {isLoading && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999 }}>
                    <BarLoader width="100%" height={4} color="#945DD9" progress={progress} />
                </div>
            )}
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;