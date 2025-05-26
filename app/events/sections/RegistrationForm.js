'use client'
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../eventPage.module.scss'
import Link from "next/link";
export default function RegistrationForm({event_name, event_id, form_request}) {

    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [phone , setPhone] = useState('')
    const [loading, setLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isAgreed, setIsAgreed] = useState(false);
    const [isReadyToSend, setIsReadyToSend] = useState(false);


    useEffect(() => {
        const allFieldsFilled = name.trim().length >= 2 && email.trim().length >= 2 && phone.trim().length >= 2
        setIsReadyToSend(allFieldsFilled && isAgreed);
    }, [name, email, phone, isAgreed]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);


        let ticket_id =  uuidv4()

        const payload = {
            name: name,
            email: email,
            phone: phone,
            event_name: event_name,
            event_id: event_id,
            ticket_id: ticket_id,
            form_request: form_request,
        };


        const res = await fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        const data = await res.json();
        alert(data.message);
        setLoading(false);

        if (data.state === 'sent'){

            setName('')
            setEmail('')
            setPhone('')
            setIsAgreed(false)
            setIsSent(true)
        }
    };

    return (

        <section className={styles.formSection} id='sign-up'>
            <div className="container">
                <h2 className={styles.formHeading}>Sign up</h2>
                <div className={styles.formWrapper} style={{backgroundImage: `url(/images/regFormBg.png)`}}>
                    <form onSubmit={handleSubmit} className={styles.regForm}>
                        <h3 className={styles.formH3}>{event_name}</h3>

                        <div className={styles.inputs}>
                            <input className={styles.regInput} value={name} name="name" placeholder="Name" required onChange={(e)=> setName(e.target.value)}/>
                            <input className={styles.regInput} value={email} name="email" type="email" placeholder="Email" required onChange={(e)=> setEmail(e.target.value)}/>
                            <input className={styles.regInput} value={phone} name="phone" placeholder="Phone" required onChange={(e)=> setPhone(e.target.value)}/>
                            <label>
                                <input type="checkbox" checked={isAgreed}
                                       onChange={(e)=>setIsAgreed(e.target.checked)} /> I agree all <Link target={'_blank'} style={{textDecoration: "underline"}} href={'/rules'}>rules of Mysteria</Link>
                            </label>

                        </div>

                        {isSent
                            ? <span className={styles.sentBtn}>We’ve sent your ticket to your email</span>
                            : <button className={styles.signUpBtn} disabled={!isReadyToSend}
                                      type="submit">{loading ? 'Pending...' : 'Sign up'}</button>
                        }


                    </form>
                </div>
            </div>


        </section>

    );
}