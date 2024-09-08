
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function r11() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();

     const continQuiz = () => {
        router.push('/question-3');
      };

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
                        <img src="/assets/r2-1 bean.png" alt="bean2" style={{ width: '200px', height: 'auto' }} />

                        <br/><br/>
                        <small>
                            Binge eating symptoms can be <br/>exhausting.
                            
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