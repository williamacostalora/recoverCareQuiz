// page.js
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function R11() {
    const router = useRouter();
    const [completed, setCompleted] = useState(0); // Progress state

    useEffect(() => {
        // Increment progress every 100ms until it reaches 100%
        const progressInterval = setInterval(() => {
            setCompleted((prev) => (prev < 100 ? prev + 1 : prev));
        }, 30); // Adjust the interval for speed of the progress bar

        // Redirect after 3 seconds
        const timer = setTimeout(() => {
            router.push('/questions/question-3');
        }, 3000);

        // Clean up intervals and timeouts
        return () => {
            clearInterval(progressInterval);
            clearTimeout(timer);
        };
    }, [router]);

    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: '20px 0'
    };

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: '#945DD9',
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 0.2s ease-in-out',
    };

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
    };

    return (
        <>
            <Head>
                <link 
                    rel="stylesheet" 
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" 
                    integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" 
                    crossOrigin="anonymous" 
                    referrerPolicy="no-referrer" 
                />
            </Head>
            <div style={{ background: '#E9D7F7', minHeight: '100vh', padding: '20px' }}>
                <div className="container mt-5 ml-5">
                    {/* Progress bar */}
                    <div style={containerStyles}>
                            <div style={fillerStyles}>
                                <span style={labelStyles}>{`${completed}%`}</span>
                            </div>
                        </div>
                    <div className="text-center">
                        <center>
                            <h3 className='mtb-1'>
                                <span style={{ color: 'black' }}>r</span>
                                <span style={{ color: '#945DD9' }}>.</span>
                                <span style={{ color: 'black' }}>care</span>
                            </h3>
                        </center>

                        <br /><br /><br />

                        <center>
                            <img src="/assets/r1-1 bean.png" alt="bean" style={{ width: '200px', height: 'auto' }} />
                            <h3 className='mb-4'>Glad you are here!</h3>
                            <br />
                            <small>
                                If you are trying to get more insight<br /> into your binge eating behavior, <br />our quiz is a great first step.
                                <br /><br />
                            </small>
                        </center>

                        
                    </div>
                    <br /><br />
                </div>
            </div>
        </>
    );
}
