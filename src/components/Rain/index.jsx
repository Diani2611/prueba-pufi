import './styles.css'


export default function Rain() {
    return (
        <section>
            <div className='body-rain'>
                <div className='rain-image'>
                    <button type='submit' className='image-button'>SHOP</button>
                </div>
                <div className='body-text'>
                    <h1 className='body-text__title'>Pufi RAIN</h1>
                    <span className='body-text__description'>Descripción del producto.Este es un texto simulado</span>
                    <div className='body-text__button'>
                        <button type='submit'> Ver más</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
