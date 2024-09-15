'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function R12() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/questions/question-3');
        }, 3000); // 3 seconds timer

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
            <div style={{ background: '#E9D7F7', minHeight: '100vh', padding: '20px' }}>
                <div className="container mt-5 ml-5">
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
                            <img src="/assets/r1-2 bean.png" alt="bean" style={{ width: '200px', height: 'auto' }} />
                            <h3 className='mb-4'>Glad you are here!</h3>
                            <br />
                            <small>
                                
                            This quiz will help you understand <br /> yourself better and discover if <br /> R.care is the right fit for you.
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