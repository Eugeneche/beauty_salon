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
            <label>name</label>
            <input type="text" name="user_name" placeholder="your name" required />
            <label>phone</label>
            <input type="tel" id="user_phone" name="user_phone" placeholder="your phone" required></input>
            <label>email</label>
            <input type="email" name="user_email" placeholder="your email" required />
            <label>message</label>
            <textarea name="message" placeholder="your message" required />
        </div>
        <div className={styles.submit}>
            <input type="submit" value="Send" />
        </div>
    </form>
    )
}

export default Form