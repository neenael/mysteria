'use client'
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.scss'
import Link from "next/link";
export default function ContactForm({className}) {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [message , setMessage] = useState('')
    const [loading, setLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);
    const [isReadyToSend, setIsReadyToSend] = useState(false);


    useEffect(() => {
        const allFieldsFilled = name.trim().length >= 2 && email.trim().length >= 2 && message.trim().length >= 2
        setIsReadyToSend(allFieldsFilled && isAgreed);
    }, [name, email, message, isAgreed]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            name: name,
            email: email,
            message: message,
        };


        // const res = await fetch('/api/submit', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(payload),
        // });

        // const data = await res.json();
        // alert(data.message);
        setLoading(false);


            setName('')
            setEmail('')
            setMessage('')
            setIsAgreed(false)
            setIsSent(true)

    };

    return (

        <section className={`${className} ${styles.formSection}`} id='sign-up'>
            <div className="container">
                <div className={styles.formWrapper} style={{backgroundImage: `url(/images/contactFormBg.png)`}}>
                    <form onSubmit={handleSubmit} className={styles.regForm}>
                        <h3 className={styles.formH3}>Send us a message via form</h3>

                        <div className={styles.inputs}>
                            <input className={styles.regInput} value={name} name="name" placeholder="Name" required onChange={(e)=> setName(e.target.value)}/>
                            <input className={styles.regInput} value={email} name="email" type="email" placeholder="Email" required onChange={(e)=> setEmail(e.target.value)}/>
                            <textarea style={{resize: "none"}} placeholder={"Message"} className={styles.regInput} name="message" cols="30" rows="5" value={message}  onChange={(e)=> setMessage(e.target.value)}></textarea>

                            <label>
                                <input type="checkbox" checked={isAgreed}
                                       onChange={(e)=>setIsAgreed(e.target.checked)} /> I agree all <Link target={'_blank'} style={{textDecoration: "underline"}} href={'/rules'}>rules of Mysteria</Link>
                            </label>

                        </div>

                        {isSent
                            ? <span className={styles.sentBtn}>We’ve received your message</span>
                            : <button className={styles.signUpBtn} disabled={!isReadyToSend}
                                      type="submit">{loading ? 'Pending...' : 'Send'}</button>
                        }


                    </form>
                </div>
            </div>


        </section>

    );
}