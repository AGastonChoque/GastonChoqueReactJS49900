import { useState } from "react"
import classes from "./ContactForm.module.css"

const ContactForm = ({ createOrder }) => {
    const [nameForm, setNameForm] = useState("")
    const [emailForm, setEmailForm] = useState("")
    const [numberForm, setNumberForm] = useState("")
    const [messageForm, setMessageForm] = useState("")

    const handleNameChange = (e) => setNameForm(e.target.value)
    const handleEmailChange = (e) => setEmailForm(e.target.value)
    const handleNumberChange = (e) => setNumberForm(e.target.value)
    const handleMessageChange = (e) => setMessageForm(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            name: nameForm,
            email: emailForm,
            phone: numberForm,
            message: messageForm,
        }
        createOrder(userData)
    }

    return (
        <div>
            <div className={classes.vform} data-aos="zoom-out-up" data-aos-duration="2000">
                <form method="post" className={classes.form} onSubmit={handleSubmit}>
                    <p type="Nombre:">
                        <input onChange={handleNameChange} type="text" name="nameForm" placeholder="Nombre" required value={nameForm} />
                    </p>
                    <p type="Mail:">
                        <input onChange={handleEmailChange} type="email" name="emailForm" placeholder="Email" required value={emailForm} />
                    </p>
                    <p type="Telefono:">
                        <input onChange={handleNumberChange} type="number" name="numberForm" placeholder="Telefono" required value={numberForm} />
                    </p>
                    <p type="Mensaje:">
                        <input onChange={handleMessageChange} type="message" name="messageForm" placeholder="Mensaje" required value={messageForm} />
                    </p>
                    <button>
                        <input type="submit" value="Generar orden" />
                    </button>
                    <div className="d-flex flex-column">
                        <span>+54 387 595-3439</span>
                        <span>https://www.silvinatejerina.com.ar</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm