// pages/_app.js
import Router from 'next/router';
import { useState, useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import nprogress styles
import Loader from '../components/Loader'; // Import the Loader component
import '../styles/globals.css'; // Import global styles

function MyApp({ Component, pageProps }) {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleRouteChangeStart = () => {
            NProgress.start();
            setIsLoading(true);
        };

        const handleRouteChangeComplete = () => {
            NProgress.done();
            setIsLoading(false);
        };

        const handleRouteChangeError = () => {
            NProgress.done();
            setIsLoading(false);
        };

        Router.events.on('routeChangeStart', handleRouteChangeStart);
        Router.events.on('routeChangeComplete', handleRouteChangeComplete);
        Router.events.on('routeChangeError', handleRouteChangeError);

        return () => {
            Router.events.off('routeChangeStart', handleRouteChangeStart);
            Router.events.off('routeChangeComplete', handleRouteChangeComplete);
            Router.events.off('routeChangeError', handleRouteChangeError);
        };
    }, []);

    return (
        <>
            {isLoading && <Loader />} {/* Show Loader during route changes */}
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
