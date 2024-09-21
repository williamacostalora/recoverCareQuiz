
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'
  

export default function QuizIntro() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();

    const continQuiz = () => {
        router.push('/questions/question-1');
      };

    return (
        <div style={{ 
                    background: 'linear-gradient(to bottom, #E4C9F4 20%, #F5F5F5 50%)', 

                    minHeight: '100vh', 
                    padding: '20px' 
                }}>
            <div className="container mt-5 ml-5">
                <div className="text-center">
                    <center>
                        <h4 className='mtb-1'>
                            <span style={{ color: 'black' }}>r</span>
                            <span style={{ color: '#945DD9' }}>.</span>
                            <span style={{ color: 'black' }}>care</span>
                        </h4>
                    </center>

                    <br/>
                    <br/>
                    <center>
                        <h3 className='mb-4'>
                            Built by psychologists &  <br/>
                            binge eating experts <br />
                        </h3><br/>
                        <small>
                            
                            <span style={{ color: '#4D4D4D' }}>Our quiz will help you learn more <br/>
                            about yourself and provide you with a 
                            <br/>
                            personal binge eating score.
                            </span>
                            <br/> 
                            <br/>
                            {/* <span style={{ color: '#A9A9A9' }}>⌛ 3 min quiz</span> */}
                        </small>
                    </center>
                        
                    </div>
                    <br/>
                    <center>

                        <button
                            style={{
                                backgroundColor: '#FFFFFF', 
                                // marginRight: '13px', 
                                marginBottom: '13px',  
                                width: '220px', 
                                height: '260px' , 
                                border:'none', 
                                outline:'none',
                                borderRadius:'15px',
                                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                                alignItems: 'center',
                                textAlign:'center'
                            }}
                            >
                            

                                <img
                                    src="/assets/sample-score.jpeg" 
                                    alt="progress bar" 
                                    style={{ width: '200px', height: '150' }} 
                                >
                                </img>
                          

                        </button>
                        <br/>
                        <br/>

                        <small>
                        <span style={{ color: '#4D4D4D' }}>Created with experts from </span>
                        </small>

                        <br/>
                        <img
                            src="/assets/harvard-logo.png"
                            alt="Harvard Logo"
                            style={{
                            // display: 'flex',
                            width: '150px',
                            height: '80',
                            marginTop: '20px',

                            }}
                        />
                    </center>
                    {/* <br/> */}

                    

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