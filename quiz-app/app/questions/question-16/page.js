
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function Question16() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();

    const continNo = () => {
        router.push('/questions/answers/question-16-answ1');

      };

    const continYes = () => {
    router.push('/questions/answers/question-16-answ2');

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
                        style={{ width: '200px', height: 'auto' }} 
                    />
                    </center>

                    <br/>

                    <center>
                        <h3 className='mb-4'>
                        <span style={{ color: '#4D4D4D' }}>
                            Are you your harshest critic?
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
                                    onClick={() => continNo('/answers/question-16-answ1')}
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
                                    onClick={() => continYes('/answers/question-16-answ2')}
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
                                
                                    <br/><br/>
                                    Yes
                                </button>
                                <br/>
                                    
                                {/* </center> */}
                            </center>
                        </>
                    )}
            </div>
            
        </div>
    );
}
