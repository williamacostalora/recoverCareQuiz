
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'
  

export default function c9() {
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

                    <br/><br/><br/><br/><br/>
   
                    <center>
                    
                        <h3 className='mb-4'>
                        Managing your binge eating <br/>
                        behavior is hard, but R.care <br/>
                        makes it easy in 5 minutes a day. <br/>
                        </h3>             
                    </center>
                        
                    </div>
                    <br/>
                    <center>


                        
                    <br/><br/>

                   

                    <button
                            style={{
                                backgroundColor: '#FFFFFF', 
                                // marginRight: '13px', 
                                marginBottom: '13px',  
                                width: '300px', 
                                height: '310px' , 
                                border:'none', 
                                outline:'none',
                                borderRadius:'15px',
                                // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                                alignItems: 'center',
                                textAlign:'center'
                            }}
                            >
                            

                            <img
                                // src="/assets/sample-score.jpeg" 
                                src = "/assets/c9.jpg"
                                alt="progress bar" 
                                style={{ width: '290px', height: '190' }} 
                            >
                            </img>
                        
                        </button>
                </center>

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