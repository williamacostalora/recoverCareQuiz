
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'
  

export default function c2() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();

    // const continQuiz = () => {
    //     router.push('/questions/question-1');
    //   };

    return (
        <div style={{ 
                    background: ' #E9D7F7 ', 
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
                        Become more productive and <br/>
                        live life fully by saying <br/>
                        goodbye to obsessive <br/>
                        thoughts about food. <br/>
                        </h3>             
                    </center>
                        
                    </div>
                    <br/><br/>
                    <center>

                        <button
                            style={{
                                backgroundColor: '#FFFFFF', 
                                // marginRight: '13px', 
                                marginBottom: '13px',  
                                width: '260px', 
                                height: '260px' , 
                                border:'none', 
                                outline:'none',
                                borderRadius:'15px',
                                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                                alignItems: 'center',
                                textAlign:'center'
                            }}
                            >
                            

                                <img
                                    // src="/assets/sample-score.jpeg" 
                                    src = "/assets/c2.jpg"
                                    alt="progress bar" 
                                    style={{ width: '250px', height: '180' }} 
                                >
                                </img>
                          

                        </button>
                        <br/>

                        <small>
                            <small>
                            R.care helps you feeling more focused and less <br/>
                            distracted by the obsessive thoughts about food.
                            </small>
                        </small>

                        <br/><br/><br/><br/>
                        
                    </center>

                    

                    {quizStarted ? (
                        <Quiz name={name} />
                    ) : (
                        <>
                            
                            <center>
                                <button
                                    onClick={() => continQuiz(true)}
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

                                
                            </center>
                        </>
                    )}
            </div>
            
        </div>
    );
}