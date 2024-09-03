// page.js
'use client'
import { useState } from "react";
import Quiz from "./quiz";

export default function Home() {
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

                <h1 className='mtb-1'>
                    <span style={{ color: 'black' }}>r</span>
                    <span style={{ color: '#945DD9' }}>.</span>
                    <span style={{ color: 'black' }}>care</span>
                </h1>
                <br/>
                <br/>
                <br/>

                    <h3 className='mb-4'>
                        <strong>Get a personalized <br/>
                        program </strong><span style={{ color: '#4D4D4D' }}>to manage</span> <br />
                        <span style={{ color: '#4D4D4D' }}>your binge eating ✨</span>
                    </h3>

                    <small>
                        
                        <span style={{ color: '#4D4D4D' }}>Select your age to start the quiz.</span>
                        <br/> <br/>
                        <span style={{ color: '#A9A9A9' }}>⌛ 3 min quiz</span>
                    </small>
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
                        <center><button
                            onClick={() => setQuizStarted(true)}
                            className="btn btn-primary btn-large"
                            style={{ 
                                backgroundColor: '#945DD9', 
                                marginRight: '13px', 
                                marginBottom: '13px',  
                                width: '110px', 
                                height: '90px' , 
                                border:'none', 
                                outline:'none',
                                borderRadius:'15px',
                                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                            }}

                        >
                            13-17
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
                        </button></center>
                    </>
                )}
            </div>
        </div>
    );
}