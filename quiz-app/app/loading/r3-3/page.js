
'use client'
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function r33() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/questions/question-15');
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
                        <img src="/assets/r3-3 bean.png" alt="bean2" style={{ width: '200px', height: 'auto' }} />

                        <br/><br/>
                        <small>
                        It’s important to remember that <br/> <strong>you’re not alone</strong> and that you’re <br/> taking a step towards emotional <br/> healing. 
                            
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