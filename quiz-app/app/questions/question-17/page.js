
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function Question17() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();
    
    const continQuiz = () => {
        router.push('/questions/question-18');
      };

    // const continQuiz = () => {
    //     router.push('/r1-1');
    //   };

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
                            Do you feel self-conscious eating around other people?
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
                                    onClick={() => continQuiz(true)}
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
                                    <br/>
                                    No
                                </button>
                              
                                <button
                                    onClick={() => continQuiz(true)}
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
                                
                                    <br/>Yes
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
