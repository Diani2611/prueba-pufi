import './styles.css'


export default function Puff() {
    return (
        <section>
            <div className='body-puff'>
                <div className='body-text'>
                    <h1 className='body-text__title'>Pufi PUFF</h1>
                    <span className='body-text__description'>Descripción del producto.Este es un texto simulado</span>
                    <div className='body-text__button'>
                        <button type='submit'> Ver más</button>
                    </div>
                </div>
                <div className='puff-image'></div>
            </div>
        </section>
    )
}
