// pages/r11.js
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function R11() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Start loading state and set a timer
        setLoading(true);
        const timer = setTimeout(() => {
            router.push('/questions/question-3');
        }, 3000); // 5 seconds timer

        // Cleanup timer on component unmount
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <>
            <Head>
                <link 
                    rel="stylesheet" 
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" 
                    integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" 
                    crossorigin="anonymous" 
                    referrerPolicy="no-referrer" 
                />
            </Head>
            <div style={{ 
                background: '#E9D7F7', 
                minHeight: '100vh', 
                padding: '20px' 
            }}>
                {loading ? (
                    <div className="loader-container" style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        height: '100vh' 
                    }}>
                        <div className="loader" style={{
                            border: '16px solid #f3f3f3', 
                            borderTop: '16px solid #945DD9', 
                            borderRadius: '50%', 
                            width: '120px', 
                            height: '120px', 
                            animation: 'spin 2s linear infinite' 
                        }}></div>
                        <style jsx>{`
                            @keyframes spin {
                                0% { transform: rotate(0deg); }
                                100% { transform: rotate(360deg); }
                            }
                        `}</style>
                    </div>
                ) : (
                    <div className="container mt-5 ml-5">
                        <div className="text-center">
                            <center>
                                <h3 className='mtb-1'>
                                    <span style={{ color: 'black' }}>r</span>
                                    <span style={{ color: '#945DD9' }}>.</span>
                                    <span style={{ color: 'black' }}>care</span>
                                </h3>
                            </center>

                            <br />
                            <br />
                            <br />

                            <center>                   
                                <img src="/assets/r1-1 bean.png" alt="bean" style={{ width: '200px', height: 'auto' }} />
                                <h3 className='mb-4'>
                                    Glad you are here!
                                </h3>
                                <br />
                                <small>
                                    If you are trying to get more insight<br /> into your binge eating behavior, <br />our quiz is a great first step.
                                    <br />
                                    <br/>
                                </small>
                            </center>
                        </div>
                        <br /><br />
                    </div>
                )}
            </div>
        </>
    );
}
