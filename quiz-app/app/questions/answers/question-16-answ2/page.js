
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function Question16Yes() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();




    const [message, setMessage] = useState("💪 It's normal to feel this way. Being tough on yourself is common, but remember, you deserve the same kindness you give others --we're here to help with that!");

    const handleYesClick = () => {
        setMessage("💪 It's normal to feel this way. Being tough on yourself is common, but remember, you deserve the same kindness you give others --we're here to help with that!");
      };
    
    const handleNoClick = () => {
        setMessage("🌼 Your self-assurance is impressive! Great job practicing self-compassion—keep nurturing that kindness toward yourself!");
      };



    const continQuiz = () => {
        router.push('/questions/question-17');
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
                            <span style={{ color: '#7D7D7D' }}>Understanding You</span>
                        </small>
                        <br/><br/>
                    

                    <img
                        src="/assets/q2-bar.jpeg" 
                        alt="progress bar" 
                        style={{ width: '200px', height: '100' }} 
                    >
                    </img>
                    </center>

                    <br/>

                    <center>
                        <h3 className='mb-4'>
                        <span style={{ color: '#4D4D4D' }}>
                            Are you your harshest critic?
                        </span>
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
                                    onClick={handleNoClick}
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
                                    handleNoClick
                                >
                                    <span style={{ fontSize: '30px' }}>👎</span>
                                    <br/><br/>
                                    No
                                </button>
                              
                                <button
                                    onClick={handleYesClick}
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
                                
                                    <br/><br/>Yes
                                </button>
                                <br/>


                                {/* <center> */}
                                <button
                                        style={{ 
                                            position: 'fixed',
                                            bottom: '60px',
                                            align: 'center',
                                            backgroundColor: '#F0E6FB', 
                                            marginRight: '13px', 
                                            marginBottom: '13px',  
                                            width: '320px', 
                                            height: '90px' , 
                                            border:'none', 
                                            outline:'none',
                                            borderRadius:'15px',
                                            left: '50%',
                                            transform: 'translateX(-50%)'
                                            // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'
                                            
                                        }}

                                    >
                                        <small>
                                            {/* <strong><span>💪 It's normal to feel this way. </span> </strong>
                                            <br/>
                                            Being tough on yourself is common, but remember, <br/>
                                            you deserve the same kindness you give others -- <br/>
                                            we're here to help with that! */}
                                            <small>{message}</small>
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