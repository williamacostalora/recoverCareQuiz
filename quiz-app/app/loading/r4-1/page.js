
'use client'
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function r41() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/loading/r4-2');
        }, 3000); // 3 seconds timer

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div style={{ 
                    background: ' #E9D7F7 ', 
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

                    <br/>
                    <br/>
                    <br/>


                    <center>                   
                        <img src="/assets/r4-1 bean.png" alt="bean2" style={{ width: '200px', height: 'auto' }} />

                        <br/><br/>
                        <small>
                        Binge eating often stems from a deep <br/> sensitivity to emotions and a strong <br/> desire to find comfort and relief, which <br/> can be channeled into nurturing <br/>relationships and self-care. 
                            <br/> 
                            <br/>
                        </small>
                    </center>
                        
                    </div>
                    <br/><br/>

            </div>
            
        </div>
    );
}