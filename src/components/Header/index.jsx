import MenuOption from '../Menu';
import './styles.css'

export default function Header() {
    return (
        <section className='wrapper-header'>
            <div className='header-content'>
                <div className='header-logo'>
                    <h1 className='logo-text'> Pufi</h1>
                </div>
                <div>
                    <MenuOption />
                </div>
                <div>
                    <ul className='header-user'>
                        <li className='header-user__text'>MI CUENTA</li>
                        <li className='header-user__text'>MI COMPRA</li>
                    </ul>
                </div>
            </div>
            <div className='text-header'>
                <p>ESTÁR CÓMODO <br></br>NUNCA FUE TAN FÁCIL.</p>
            </div>
            <div>
                <button type='submit' className='header-button'>SHOP</button>
            </div>
        </section>
    )
}



