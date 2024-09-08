
'use client'
import { useState } from "react";

  

export default function QuizIntro() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');

    return (
        <div style={{ 
                    background: 'linear-gradient(to bottom, #E4C9F4 20%, #F5F5F5 50%)', 

                    minHeight: '100vh', 
                    padding: '20px' 
                }}>
            <div className="container mt-5 ml-5">
                <div className="text-center">
                    <center>
                        <h2 className='mtb-1'>
                            <span style={{ color: 'black' }}>r</span>
                            <span style={{ color: '#945DD9' }}>.</span>
                            <span style={{ color: 'black' }}>care</span>
                        </h2>
                    </center>

                    <br/>
                    <br/>
                    <br/>
                    <center>
                        <h3 className='mb-4'>
                            Built by psychologists &  <br/>
                            binge eating experts <br />
                        </h3>
                        <br/>
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
                    <br/><br/>
                    <center>

                        <button
                            style={{
                                backgroundColor: '#FFFFFF', 
                                // marginRight: '13px', 
                                marginBottom: '13px',  
                                width: '220px', 
                                height: '250px' , 
                                border:'none', 
                                outline:'none',
                                borderRadius:'15px',
                                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                                alignItems: 'center',
                                textAlign:'center'
                            }}
                            >
                            <span 
                                style={{ 
                                    fontSize: '12px', 
                                    color: 'gray', 
                                    marginBottom: '5px' 
                                }}>
                                SAMPLE
                            </span>
                            <br/><br/>

                            YOUR BINGE EATING score
                            <br/>

                            86%
                            <br/>

                            Very High

                        </button>

                        <br/>
                        <img
                            src="quiz-app/app/assets/harvard-medschool-logo.png"
                            alt="Harvard Med School Logo"
                            style={{
                            width: '150px',
                            height: 'auto',
                            marginTop: '20px', // Add margin to create space between button and image
                            }}
                        />
                    </center>

                    

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

                                {/* <button
                                    onClick={() => setQuizStarted(true)}
                                    className="btn btn-primary btn-large"
                                    style={{ 
                                        backgroundColor: '#945DD9', 
                                        marginRight: '13px', 
                                        marginBottom: '13px',  
                                        width: '110px', 
                                        height: '90px', 
                                        border:'none', 
                                        outline:'none',
                                        borderRadius:'15px',
                                        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                                    }}

                                >
                                    18-29
                                </button>
                                <br/>
                                <button
                                    onClick={() => setQuizStarted(true)}
                                    className="btn btn-primary btn-large"
                                    style={{ 
                                        backgroundColor: '#945DD9', 
                                        marginRight: '13px', 
                                        marginBottom: '13px', 
                                        width: '110px', 
                                        height: '90px', 
                                        border:'none', 
                                        outline:'none',
                                        borderRadius:'15px',
                                        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                                    }}

                                >
                                    30-49
                                </button>

                                <button
                                    onClick={() => setQuizStarted(true)}
                                    className="btn btn-primary btn-large"
                                    style={{ 
                                        backgroundColor: '#945DD9',
                                        marginRight: '13px', 
                                        marginBottom: '13px', 
                                        width: '110px', 
                                        height: '90px', 
                                        border:'none', 
                                        outline:'none',
                                        borderRadius:'15px',
                                        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                                    }}

                                >
                                    50+
                                </button> */}
                            </center>
                        </>
                    )}
            </div>
            
        </div>
    );
}