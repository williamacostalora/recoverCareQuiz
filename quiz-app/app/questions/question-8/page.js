
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function Question8() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();

    const continQuiz = () => {
        router.push(path);
      };

    return (
        <div style={{ 
                    background: 'white', 
                    minHeight: '100vh', 
                    padding: '20px' 
                }}>
            <div className="container mt-5 ml-5">
                <div className="text-center">
                    <center>
                        <small className='mtb-1'>
                            <span style={{ color: '#7D7D7D' }}>Understanding You</span>
                        </small>
                        <br/>

                    {/* <img 
                        src="/quiz-app/public/assets/q2-bar.jpeg" 
                        alt="progress bar" 
                        style={{ width: '200px', height: 'auto' }} 
                    /> */}
                    </center>

                    <br/><br/><br/>

                    <center>
                        <h3 className='mb-4'>
                        <span style={{ color: '#4D4D4D' }}>
                            Is it easy for you to get back on track <br/>with a diet or healthy eating regime?
                        </span>
                        </h3>
                        
                    </center>
                        
                    </div>
                    <br/> <br/>
                    

                    {quizStarted ? (
                        <Quiz name={name} />
                    ) : (
                        <>
                            
                            <center>
                                <button
                                    onClick={() => continQuiz('/answers/question-8-answ1')}
                                    className="btn btn-primary btn-large"
                                    style={{ 
                                        backgroundColor: '#F0F0F0', 
                                        marginRight: '13px', 
                                        marginBottom: '13px',  
                                        width: '150px', 
                                        height: '100px' , 
                                        border:'none', 
                                        outline:'none',
                                        borderRadius:'15px',
                                        // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                                    }}

                                >
                                    <span style={{ fontSize: '30px' }}>👎</span>
                                    <br/><br/>
                                    No
                                </button>
                              
                                <button
                                    onClick={() => continQuiz('/answers/question-8-answ2')}
                                    className="btn btn-primary btn-large"
                                    style={{ 
                                        backgroundColor: '#F0F0F0', 
                                        marginRight: '13px', 
                                        marginBottom: '13px',  
                                        width: '150px', 
                                        height: '100px' , 
                                        border:'none', 
                                        outline:'none',
                                        borderRadius:'15px',
                                        // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                                    }}

                                >
                                    <span style={{ fontSize: '30px' }}>👍</span>
                                
                                    <br/><br/>Yes
                                </button>
                                <br/>


                                {/* <center> */}
                                {/* <button
                                        style={{ 
                                            position: 'fixed',
                                            bottom: '150px',
                                            align: 'center',
                                            backgroundColor: '#F0E6FB', 
                                            marginRight: '13px', 
                                            marginBottom: '13px',  
                                            width: '300px', 
                                            height: '70px' , 
                                            border:'none', 
                                            outline:'none',
                                            borderRadius:'15px',
                                            left: '50%',
                                            transform: 'translateX(-50%)'
                                            // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                                            
                                        }}

                                    >
                                        <small>
                                            🌟Your resilience is yo strength-keep using it to <br/>
                                            stay on track with your recovery goal.
                                        </small>
                                    </button>    */}

                                    {/* <button
                                        style={{ 
                                            position: 'fixed',
                                            bottom: '60px',
                                            align: 'center',
                                            backgroundColor: '#F0E6FB', 
                                            marginRight: '13px', 
                                            marginBottom: '13px',  
                                            width: '300px', 
                                            height: '70px' , 
                                            border:'none', 
                                            outline:'none',
                                            borderRadius:'15px',
                                            left: '50%',
                                            transform: 'translateX(-50%)'
                                            // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                                            
                                        }}

                                    >
                                        <small>
                                            🍃It's okay to struggle; we're here to help you get <br/>
                                            back up to practice mindful eating, one step at a time!
                                        </small>
                                    </button>    */}
                                    
                                    <br/>
                                    <button
                                        onClick={() => continQuiz(true)}
                                        className="btn btn-primary btn-large"
                                        style={{ 
                                            // display: 'flex',
                                            // justifyContent:'center',
                                            // alignItems:'center',
                                            // // height: '100vh',
                                            position: 'fixed',
                                            bottom: '0',
                                            backgroundColor: '#945DD9', 
                                            marginRight: '13px', 
                                            marginBottom: '13px',  
                                            width: '300px', 
                                            height: '50px' , 
                                            border:'none', 
                                            outline:'none',
                                            borderRadius:'15px',
                                            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                                            left: '50%',
                                            transform: 'translateX(-50%)'
                                            
                                        }}

                                    >
                                    Continue
                                    </button>
                                {/* </center> */}
                            </center>
                        </>
                    )}
            </div>
            
        </div>
    );
}