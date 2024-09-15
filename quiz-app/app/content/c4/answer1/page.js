
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'
  

export default function c4Answ1() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();

    // const continQuiz = () => {
    //     router.push('/questions/question-1');
    //   };

    return (
        <div style={{ 
                    background: ' #E9D7F7 ', 
                    minHeight: '100vh', 
                    padding: '20px' 
                }}>
            <div className="container mt-5 ml-5">
                <div className="text-center">
                    <center>
                        <h2 className='mtb-1'>
                            <span style={{ color: 'black' }}>r</span>
                            <span style={{ color: '#945DD9' }}>.</span>
                            <span style={{ color: 'black' }}>care</span>
                        </h2>
                    </center>

                    <br/>
                    <br/>
                    <br/><br/>
                    <br/>
                    <br/>


                    <center>
                    <span style={{ fontSize: '100px' }}>💪</span><br/><br/>

                    
                        <h3 className='mb-4'>
                            Great, we'll build on your <br/>
                            knowledge!
                        </h3>             
                    </center>
                        
                    </div>
                    <br/>
                    <center>

                    
                        <small>
                            Your personalized program will help you <br/>
                            truly understand your eating patterns. 
                            <br/><br/>
                            You'll develop strategies and coping <br/>
                            methods for overcoming binge eating <br/>
                            related struggles and embracing your <br/>
                            true self
                        </small>
                        
                    </center>
                    <br/><br/><br/><br/>
                    <br/><br/><br/>


                    

                    {quizStarted ? (
                        <Quiz name={name} />
                    ) : (
                        <>
                            
                            <center>
                                <button
                                    onClick={() => continQuiz(true)}
                                    className="btn btn-primary btn-large"
                                    style={{ 
                                        backgroundColor: '#945DD9', 
                                        marginRight: '13px', 
                                        marginBottom: '13px',  
                                        width: '300px', 
                                        height: '50px' , 
                                        border:'none', 
                                        outline:'none',
                                        borderRadius:'15px',
                                        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                                        
                                    }}

                                >
                                Continue
                                </button>

                                
                            </center>
                        </>
                    )}
            </div>
            
        </div>
    );
}