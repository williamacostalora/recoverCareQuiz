
'use client'
import { useState } from "react";

  

export default function r11() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');

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
                        <img src="/quiz-app/public/assets/r1-1.png" alt="bean" style={{ width: '200px', height: 'auto' }} />

                        <h3 className='mb-4'>
                            Glad you are here!
                        </h3>
                        <br/>
                        <small>
                            If you are trying to get more insight<br/> into your binge eating behavior, <br/>our quiz is a great first step.
                            
                            <br/> 
                            <br/>
                            {/* <span style={{ color: '#A9A9A9' }}>⌛ 3 min quiz</span> */}
                        </small>
                    </center>
                        
                    </div>
                    <br/><br/>

                        

                    

            </div>
            
        </div>
    );
}