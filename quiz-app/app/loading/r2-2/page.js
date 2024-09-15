
'use client'
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function r21() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/loading/r2-3');
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
                        <img src="/assets/r2-2 bean.png" alt="bean2" style={{ width: '200px', height: 'auto' }} />

                        <br/><br/>
                        <small>
                        It sounds like you’re facing a <br/> handful of these challenges, but <br/> you’re on the right path.
                            
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