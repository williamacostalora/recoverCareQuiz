
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'
  

export default function c6Anxiety() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();

    // const continQuiz = () => {
    //     router.push('/questions/question-1');
    //   };

    return (
        <div style={{ 
                    background: ' #E4DFEA ', 
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
                    <br/>
                    <br/>
                    <br/>


                    <center>
                    
                        <h3 className='mb-4'>
                        Feeling anxious can be a<br/>
                        result of binge eating <br/>
                        symptoms.<br/>
                        </h3>             
                    </center>
                    
                        
                    </div>
                    <center>
                        
         
                    <br/><br/>

                    

                <small>
                The stress of managing eating <br/>
                behaviors, body image concerns, <br/>
                and the fear of being judged can <br/>
                contribute to heightened anxiety <br/>
                levels. Often, managing your eating <br/>
                habit effectively can significantly <br/>
                reduce or eliminate this anxiety. <br/>
                </small>                
                <br/><br/>


                <img
                        src = "/assets/c6.png"
                        alt="progress bar" 
                        style={{ width: '300px', height: '200' }} 
                    >
                    </img>

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