
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function Question24() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();

    const continQuiz = () => {
        router.push('/questions/question-25');
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
                            <span style={{ color: '#7D7D7D' }}>Your Binge Eating Experience</span>
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
                        {/* <small>
                            <span style={{ color: '#BCA7C9' }}>Do you relate to following statements?</span>                            
                        </small> */}

                        <br/><br/>

                        <h3 className='mb-4'>
                            <span style={{ color: '#4D4D4D' }}>
                                How often do you experience <br/> difficulty falling asleep or staying <br/> asleep after a binge eating episode?
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
                                             <span style={{ fontSize: '30px' }}>👎</span>
                                        </button>
                                        <div style={{ marginTop: '10px' }}>Never</div>
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
                                            <span style={{ fontSize: '25px' }}>👎</span>
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
                                            <span style={{ fontSize: '25px' }}>🤷‍♀️</span>
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
                                            <span style={{ fontSize: '25px' }}>👍</span>
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
                                            <span style={{ fontSize: '30px' }}>👍</span>
                                        </button>
                                        <div style={{ marginTop: '10px' }}>All the time</div>
                                    </div>
                                </div>
                            </center>
                        </>
                    )}
            </div>
            
        </div>
    );
}