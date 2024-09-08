
'use client'
import { useState } from "react";

export default function Question2() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');

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
                        src="/quiz-app/public/assets/q2-bar.jpeg" 
                        alt="progress bar" 
                        style={{ width: '200px', height: 'auto' }} 
                    />
                    </center>


                    <br/>
                    <br/>
                    <br/>
                    <center>
                        <h3 className='mb-4'>
                            
                        <span style={{ color: '#4D4D4D' }}>
                            Which gender do you identify with? <br/>
                           
                        </span>
                            
                        </h3>
                        <br/>
                        
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
                                    onClick={() => setQuizStarted(true)}
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
                                       
                                    }}

                                >
                                    Female
                                </button>
                                <br/>
                                <button
                                    onClick={() => setQuizStarted(true)}
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
                                        
                                    }}

                                >
                                    Male
                                </button>
                                <br/>
                                <button
                                    onClick={() => setQuizStarted(true)}
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
                                        
                                    }}

                                >
                                    Non-binary
                                </button>
                                <br/>
                                <button
                                    onClick={() => setQuizStarted(true)}
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
                                        
                                    }}
                                >
                                    Prefer not to answer
                                </button>
                                <br/>
                                {/* <button
                                    onClick={() => setQuizStarted(true)}
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
                                        
                                    }}
                                >
                                    Something else
                                </button> */}
                            </center>
                        </>
                    )}
            </div>
            
        </div>
    );
}