import './styles.css'
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("xgeqvyzk");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <section>
            <div className='wrapper-form'>
                <span className='form-name'>NEWSLETTER</span>
                <h1 className='form-title'>SUSCRÍBETE</h1>
                <span className='form-description'>Y enterate de todas las novedades</span>
            </div>
            <form className='form-contact' onSubmit={handleSubmit}>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder='Ingresa tu email'
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    &#x2192;
                </button>
            </form>
        </section>
    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;