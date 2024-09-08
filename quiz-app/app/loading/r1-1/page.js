// pages/r11.js
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function R11() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();

    const continQuiz = () => {
        router.push('/question-3');
    };

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
                                <br />
                            </small>
                        </center>
                    </div>
                    <br /><br />
                </div>
            </div>
        </>
    );
}
