'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function Question26No() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();

    const continQuiz = () => {
        router.push('/questions/question-27');
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
                        <br/>

                        <img
                            src="/assets/q2-bar.jpeg" 
                            alt="progress bar" 
                            style={{ width: '200px', height: '100' }} 
                        >
                        </img>
                        
                    </center>

                    <br/><br/><br/>

                    <center>
                        <h3 className='mb-4'>
                        <span style={{ color: '#4D4D4D' }}>
                        Have you heard of Alexithymia?
                        </span>
                        <p color="BCA7C9"> It’s a little known condition affecting many people with Binge Eating Disorder.</p>
                        </h3>
                        
                    </center>
                        
                    </div>
                    <br/> <br/>
                    

                    {quizStarted ? (
                        <Quiz name={name} />
                    ) : (
                        <>
                            
                            <center>
                                <button
                                    className="btn btn-primary btn-large"
                                    style={{ 
                                        backgroundColor: '#F0F0F0', 
                                        marginRight: '13px', 
                                        marginBottom: '13px',  
                                        width: '150px', 
                                        height: '100px' , 
                                        border:'none', 
                                        outline:'none',
                                        borderRadius:'15px',
                                        // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                                    }}

                                >
                                    <span style={{ fontSize: '30px' }}>👎</span>
                                    <br/><br/>
                                    No
                                </button>
                              
                                <button
                                    className="btn btn-primary btn-large"
                                    style={{ 
                                        backgroundColor: '#F0F0F0', 
                                        marginRight: '13px', 
                                        marginBottom: '13px',  
                                        width: '150px', 
                                        height: '100px' , 
                                        border:'none', 
                                        outline:'none',
                                        borderRadius:'15px',
                                        // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                                    }}

                                >
                                    <span style={{ fontSize: '30px' }}>👍</span>
                                    <br/><br/>
                                    Yes
                                </button>
                                <br/>                              

                                    <button
                                        style={{ 
                                            position: 'fixed',
                                            bottom: '60px',
                                            align: 'center',
                                            backgroundColor: '#F0E6FB', 
                                            marginRight: '13px', 
                                            marginBottom: '13px',  
                                            width: '300px', 
                                            height: '70px' , 
                                            border:'none', 
                                            outline:'none',
                                            borderRadius:'15px',
                                            left: '50%',
                                            transform: 'translateX(-50%)'
                                            // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                                            
                                        }}

                                    >
                                        <small>
                                        "Alexithymia is the inability to identify and describe emotions in oneself. This condition makes it harder for individuals to understand their feelings and can result in using food as a way to cope with unresolved or unidentified emotional distress."
                                        </small>
                                    </button>   
                                    
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
                                            width: '300px', 
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