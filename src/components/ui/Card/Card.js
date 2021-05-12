import cardCss from './Card.module.css'

const Card = ({children}) => {
    return (
        <div className={cardCss.card}>
            {children}
        </div>
    )
}

export default Card
