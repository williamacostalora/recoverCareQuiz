'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function Question8No() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();

    const [message, setMessage] = useState("🍃 It's okay to struggle; we're here to help you get back up to practice mindful eating, one step at a time!");

    const handleYesClick = () => {
        setMessage("🌟 Your resilience is your strength—keep using it to stay on track with your recovery goal.");
      };
    
    const handleNoClick = () => {
        setMessage("🍃 It's okay to struggle; we're here to help you get back up to practice mindful eating, one step at a time!");
      };

    const continQuiz = () => {
        router.push('/questions/question-9');
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
                        <br/><br/>

                        <img
                            src="/assets/q2-bar.jpeg" 
                            alt="progress bar" 
                            style={{ width: '200px', height: '100' }} 
                        >
                        </img>
                        
                    </center>

                    <br/>

                    <center>
                        <h3 className='mb-4'>
                        <span style={{ color: '#4D4D4D' }}>
                            Is it easy for you to get back on track <br/>with a diet or healthy eating regime?
                        </span>
                        </h3>
                        
                    </center>
                        
                </div>
                <br/><br/>
                
                {quizStarted ? (
                    <Quiz name={name} />
                ) : (
                    <>
                        <center>
                            <button
                                onClick={handleNoClick}
                                className="btn btn-primary btn-large"
                                style={{ 
                                    backgroundColor: '#F0F0F0', 
                                    marginRight: '13px', 
                                    marginBottom: '13px',  
                                    width: '150px', 
                                    height: '100px' , 
                                    border:'none', 
                                    outline:'none',
                                    borderRadius:'15px'
                                }}
                            >
                                <span style={{ fontSize: '30px' }}>👎</span>
                                <br/><br/>
                                No
                            </button>
                          
                            <button
                                onClick={handleYesClick}
                                className="btn btn-primary btn-large"
                                style={{ 
                                    backgroundColor: '#F0F0F0', 
                                    marginRight: '13px', 
                                    marginBottom: '13px',  
                                    width: '150px', 
                                    height: '100px' , 
                                    border:'none', 
                                    outline:'none',
                                    borderRadius:'15px'
                                }}
                            >
                                <span style={{ fontSize: '30px' }}>👍</span>
                                <br/><br/>
                                Yes
                            </button>
                            
                            {/* Render the message box only if there's a message */}
                            {message && (
                                <button
                                    style={{ 
                                        position: 'fixed',
                                        bottom: '60px',
                                        backgroundColor: '#F0E6FB', 
                                        marginRight: '13px', 
                                        marginBottom: '13px',  
                                        width: '320px', 
                                        height: '80px' , 
                                        border:'none', 
                                        outline:'none',
                                        borderRadius:'15px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        fontSize: '15px'
                                    }}
                                >
                                    <small>{message}</small>
                                </button>
                            )}

                            <br/>
                            <button
                                onClick={() => continQuiz(true)}
                                className="btn btn-primary btn-large"
                                style={{ 
                                    position: 'fixed',
                                    bottom: '0',
                                    backgroundColor: '#945DD9', 
                                    marginRight: '13px', 
                                    marginBottom: '13px',  
                                    width: '320px', 
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
                        </center>
                    </>
                )}
            </div>
        </div>
    );
}
