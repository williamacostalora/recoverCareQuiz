
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Image from 'next/image'
 


export default function Question1() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();

    const continQuiz = () => {
        router.push('/question-2');
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
                    <img 
                        src="/assets/q2-bar.jpeg" 
                        alt="progress bar" 
                        style={{ width: '200px', height: '100' }} 
                    />
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
                                       
                                    }}

                                >
                                    {/* Female */}
                                    <span style={{ color: 'black' }}>Female</span>
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
                                        
                                    }}

                                >
                                    {/* Male */}
                                    <span style={{ color: 'black' }}>Male</span>
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
                                        
                                    }}

                                >
                                    {/* Non-binary */}
                                    <span style={{ color: 'black' }}>Non-binary</span>

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
                                        
                                    }}
                                >
                                    {/* Prefer not to answer */}
                                    <span style={{ color: 'black' }}>                                    Prefer not to answer
                                    </span>

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