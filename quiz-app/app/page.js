'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { db } from "./firebase";
import { collection, addDoc, doc, setDoc, updateDoc } from "firebase/firestore";

export default function Home() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [name, setName] = useState('');
    const router = useRouter();

    // Function to start the quiz and create a document in the main collection
    const startQuiz = async (ageGroup) => {
        try {
            // Add the main document to the quizResponses collection
            const docRef = await addDoc(collection(db, "quizResponses"), {
                name: name,
                ageGroup: ageGroup,
                timestamp: new Date()
            });

            // Create a subcollection document with an initial score of 0
            await setDoc(doc(db, "quizResponses", docRef.id, "yPY1Pcqy2J9ZYzXOiiny", docRef.id), {
                score: 0
            });

            // Navigate to the next page
            router.push('/quiz-intro');
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    // Function to update the score based on user response
    const updateScore = async (docId, newScore) => {
        try {
            // Update the score in the subcollection
            const subCollectionRef = doc(db, "quizResponses", docId, "yPY1Pcqy2J9ZYzXOiiny", docId);
            await updateDoc(subCollectionRef, {
                score: newScore
            });
        } catch (e) {
            console.error("Error updating document: ", e);
        }
    };

    return (
            <div style={{ 
                        background: 'linear-gradient(to bottom, #E4C9F4 20%, #F5F5F5 50%)', 
                        minHeight: '100vh', 
                        padding: '20px', 
                        justifyContent: 'center',
                        textAlign: 'center' // Centering text

                        
        }}>
                <div className="text-center">
            <div className="container mt-5 ml-5">
           
                <h1 className='mtb-1'>
                    <span style={{ color: 'black' }}>r</span>
                    <span style={{ color: '#945DD9' }}>.</span>
                    <span style={{ color: 'black' }}>care</span>
                </h1>
                <br/><br/><br/>

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
                            onClick={() => startQuiz(true)}
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
                            onClick={() => startQuiz(true)}
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
                            onClick={() => startQuiz(true)}
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
                            onClick={() => startQuiz(true)}
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
        
    )

}
