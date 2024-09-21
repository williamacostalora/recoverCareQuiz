
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function Question4() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();

    const continQuiz = () => {
        router.push('/questions/question-5');
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
                    />
                    </center>

                    <br/>

                    <center>
                        <h3 className='mb-4'>
                        <span style={{ color: '#4D4D4D' }}>
                            Do you eat meals much more  <br/>quickly than others and seem to  <br/> eat a lot more than others as well?
                        </span>
                        </h3>
                        
                    </center>
                        
                    </div>
                    <br/>
                    

            

                    

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
                                        width: '300px', 
                                        height: '50px' , 
                                        border:'none', 
                                        outline:'none',
                                        borderRadius:'15px',
                                        // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                                        color: 'black'

                                    }}

                                >
                                    All the time
                                </button>
                                <br/>
                                <button
                                    onClick={() => continQuiz(true)}
                                    className="btn btn-primary btn-large"
                                    style={{ 
                                        backgroundColor: '#F0F0F0', 
                                        marginRight: '13px', 
                                        marginBottom: '13px',  
                                        width: '300px', 
                                        height: '50px' , 
                                        border:'none', 
                                        outline:'none',
                                        borderRadius:'15px',
                                        // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                                        color: 'black'

                                    }}

                                >
                                    A lot of the time
                                </button>
                                <br/>
                                <button
                                    onClick={() => continQuiz(true)}
                                    className="btn btn-primary btn-large"
                                    style={{ 
                                        backgroundColor: '#F0F0F0', 
                                        marginRight: '13px', 
                                        marginBottom: '13px',  
                                        width: '300px', 
                                        height: '50px' , 
                                        border:'none', 
                                        outline:'none',
                                        borderRadius:'15px',
                                        // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                                        color: 'black'

                                    }}

                                >
                                    Sometimes
                                </button>
                                <br/>
                                <button
                                    onClick={() => continQuiz(true)}
                                    className="btn btn-primary btn-large"
                                    style={{ 
                                        backgroundColor: '#F0F0F0', 
                                        marginRight: '13px', 
                                        marginBottom: '13px',  
                                        width: '300px', 
                                        height: '50px' , 
                                        border:'none', 
                                        outline:'none',
                                        borderRadius:'15px',
                                        // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                                        color: 'black'

                                    }}
                                >
                                    Rarely
                                </button>
                                <br/>
                                <button
                                    onClick={() => continQuiz(true)}
                                    className="btn btn-primary btn-large"
                                    style={{ 
                                        backgroundColor: '#F0F0F0', 
                                        marginRight: '13px', 
                                        marginBottom: '13px',  
                                        width: '300px', 
                                        height: '50px' , 
                                        border:'none', 
                                        outline:'none',
                                        borderRadius:'15px',
                                        // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                                        color: 'black'

                                    }}
                                >
                                    Never
                                </button>
                            </center>
                        </>
                    )}
            </div>
            
        </div>
    );
}