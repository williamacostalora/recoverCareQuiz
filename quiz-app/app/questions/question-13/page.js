
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function Question13() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();

    const continQuiz = () => {
        // router.push('/loading/r1-1');
        router.push('/questions/question-14');
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
                            <span style={{ color: '#7D7D7D' }}>Understanding you</span>
                        </small>
                        <br/><br/>

                    <img 
                        src="/assets/q2-bar.jpeg" 
                        alt="progress bar" 
                        style={{ width: '200px', height: '100' }} 
                    />
                    </center>


                    <br/>
                    <center>
                        <small>
                            <span style={{ color: '#BCA7C9' }}>Do you relate to following statements?</span>                            
                        </small>

                        <br/><br/>

                        <h3 className='mb-4'>
                            <span style={{ color: '#4D4D4D' }}>
                                "I feel in control of my urge to eat <br/>and can distract myself."
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
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '13px' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <button
                                        onClick={() => continQuiz(true)}
                                        className="btn btn-primary btn-large"
                                        style={{ 
                                            backgroundColor: '#F0F0F0', 
                                            width: '50px', 
                                            height: '60px', 
                                            border: 'none', 
                                            outline: 'none',
                                            borderRadius: '15px',
                                        }}
                                    >
                                        1
                                    </button>
                                    <div style={{ marginTop: '10px' }}>Not at all</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <button
                                        onClick={() => continQuiz(true)}
                                        className="btn btn-primary btn-large"
                                        style={{ 
                                            backgroundColor: '#F0F0F0', 
                                            width: '50px', 
                                            height: '60px', 
                                            border: 'none', 
                                            outline: 'none',
                                            borderRadius: '15px',
                                        }}
                                    >
                                        2
                                    </button>
                                    <div style={{ marginTop: '10px', color: '#FFFFFF' }}>.</div>

                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <button
                                        onClick={() => continQuiz(true)}
                                        className="btn btn-primary btn-large"
                                        style={{ 
                                            backgroundColor: '#F0F0F0', 
                                            width: '50px', 
                                            height: '60px', 
                                            border: 'none', 
                                            outline: 'none',
                                            borderRadius: '15px',
                                        }}
                                    >
                                        3
                                    </button>
                                    <div style={{ marginTop: '10px', color: '#FFFFFF' }}>.</div>

                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <button
                                        onClick={() => continQuiz(true)}
                                        className="btn btn-primary btn-large"
                                        style={{ 
                                            backgroundColor: '#F0F0F0', 
                                            width: '50px', 
                                            height: '60px', 
                                            border: 'none', 
                                            outline: 'none',
                                            borderRadius: '15px',
                                        }}
                                    >
                                        4
                                    </button>
                                    <div style={{ marginTop: '10px', color: '#FFFFFF' }}>.</div>

                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <button
                                        onClick={() => continQuiz(true)}
                                        className="btn btn-primary btn-large"
                                        style={{ 
                                            backgroundColor: '#F0F0F0', 
                                            width: '50px', 
                                            height: '60px', 
                                            border: 'none', 
                                            outline: 'none',
                                            borderRadius: '15px',
                                        }}
                                    >
                                        5
                                    </button>
                                    <div style={{ marginTop: '10px' }}>Totally</div>
                                </div>
                            </div>
                        </center>
                    </>
                )}
            </div>
            
        </div>
    );
}