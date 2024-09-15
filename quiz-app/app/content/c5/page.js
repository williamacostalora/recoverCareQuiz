
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'
  

export default function c3() {
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
                    <br/>
                    <br/>
                    <br/>
                    <br/>


                    <center>
                    
                        <h3 className='mb-4'>
                        Many R.care members don't <br/>
                        have a formal diagnosis
                        </h3>             
                    </center>
                        
                    </div>
                    <br/>
                    <center>

                    
                        <small>
                        Our bite-sized lessons will help you <br/>
                        kickstart your journey of healing <br/>
                        your relationship with food, with or<br/>
                        without a diagnosis<br/>
                        </small>
                        
                    <br/><br/>

                    <img
                        // src="/assets/sample-score.jpeg" 
                        src = "/assets/c5.png"
                        alt="progress bar" 
                        style={{ width: '300px', height: '200' }} 
                    >
                    </img>
                    <br/><br/><br/><br/><br/>
                </center>

                    

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