
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function Question2() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();

    const continQuiz = () => {
        // router.push('/loading/r1-1');
        router.push('/loading/r1-1');
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
                            <span style={{ color: '#7D7D7D' }}>Profile</span>
                        </small>
                        <br/>

                    <img 
                        src="/assets/q2-bar.jpeg" 
                        alt="progress bar" 
                        style={{ width: '200px', height: '100' }} 
                    />
                    </center>


                    <br/>
                    <br/>
                    <br/>
                    <center>
                        <h3 className='mb-4'>
                        <span style={{ color: '#4D4D4D' }}>
                            Have you ever been diagnosed with <br/>
                            Binge Eating Disorder (BED)?
                        </span>
                            
                        </h3>
                        <br/>
                        <small>
                            
                            <span style={{ color: '#BCA7C9' }}>It helps us enhance your experience, but rest assured, <br/>
                            everyone is welcome, diagnosis or not.
                            <br/>
                            </span>
        
                            
                            {/* <span style={{ color: '#A9A9A9' }}>⌛ 3 min quiz</span> */}
                        </small>
                    </center>
                        
                    </div>
                    <br/><br/>
                    

            

                    

                    {quizStarted ? (
                        <Quiz name={name} />
                    ) : (
                        <>
                            {/* <div className="mb-3">
                                <label htmlFor="nameInput"
                                    className="form-label">
                                    Enter Your Name:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nameInput"
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.target.value)}
                                />
                            </div> */}
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
                                        // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                                    }}

                                >
                                    {/* I'm diagnosed by a doctor. */}
                                    <span style={{ color: 'black' }}>I'm diagnosed by a doctor.</span>

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
                                        // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                                    }}

                                >
                                    {/* I'm self-diagnosed. */}
                                    <span style={{ color: 'black' }}>I'm self-diagnosed.</span>

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
                                        // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                                    }}

                                >
                                    {/* I suspect I might have BED. */}
                                    <span style={{ color: 'black' }}>I suspect I might have BED.</span>

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
                                        // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                                    }}
                                >
                                    {/* Not with BED, but another eating <br/>disorder. */}
                                    <span style={{ color: 'black' }}>Not with BED, but another eating <br/>disorder.</span>

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
                                        // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                                    }}
                                >
                                    {/* Something else */}
                                    <span style={{ color: 'black' }}>Something else</span>

                                </button>
                            </center>
                        </>
                    )}
            </div>
            
        </div>
    );
}