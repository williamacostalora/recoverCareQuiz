
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function Question22() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();
    const [message, setMessage] = useState("🍃 It's okay to struggle; we're here to help you get back up to practice mindful eating, one step at a time!");

    const handleYesClick = () => {
        setMessage("🌟 Your resilience is your strength—keep using it to stay on track with your recovery goal.");
      };
    
    const handleNoClick = () => {
        setMessage("🍃 It's okay to struggle; we're here to help you get back up to practice mindful eating, one step at a time!");
      };


    const continQuiz = () => {
        router.push('/questions/question-23');
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
                                Do you usually not know how <br/> physically hungry you really are and <br/> eat more than you need?
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
                                

                                <br/>
                                
                                    <button
                                        onClick={() => continQuiz(true)}
                                        className="btn btn-primary btn-large"
                                        style={{ 
                                            // display: 'flex',
                                            // justifyContent:'center',
                                            // alignItems:'center',
                                            // // height: '100vh',
                                            position: 'fixed',
                                            bottom: '0',
                                            backgroundColor: '#945DD9', 
                                            marginRight: '13px', 
                                            marginBottom: '13px',  
                                            width: '320px', 
                                            height: '50px' , 
                                            border:'none', 
                                            outline:'none',
                                            borderRadius:'15px',
                                            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                                            left: '50%',
                                            transform: 'translateX(-50%)'
                                            
                                        }}

                                    >
                                    Continue
                                    </button>
                                {/* </center> */}
                            </center>
                        </>
                    )}
            </div>
            
        </div>
    );
}