import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import * as styles from "./_Form.module.scss"

const Form = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

    emailjs.sendForm('service_ufdyw38', 'template_j0zcwlp', form.current, 'user_FAY8OHLTh9HWuUBjXK68o')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
    }

  return (
    <form className={styles.form} ref={form} onSubmit={sendEmail}>
        <div className={styles.fields}>
            <label htmlFor="user_name">name</label>
            <input type="text" id="user_name" name="user_name" placeholder="your name" required />
            <label htmlFor="user_phone">phone</label>
            <input type="tel" id="user_phone" name="user_phone" placeholder="your phone" required></input>
            <label htmlFor="user_email">email</label>
            <input type="email" id="user_email" name="user_email" placeholder="your email" required />
            <label htmlFor="message">message</label>
            <textarea id="message" name="message" placeholder="your message" required />
        </div>
        <div className={styles.submit}>
            <input type="submit" value="Send" />
        </div>
    </form>
    )
}

export default Form