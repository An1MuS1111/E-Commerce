import '@styles/Card.css'


const Card = () => {
    return (
        <>
            <div className='card'>
                <img src="/s-l1600.jpg" alt="" />
                <div className='card__info'>
                    <div className="card__name">
                        <p>Product Type</p>
                        <p>Product Name</p>
                    </div>
                    <div className="card__action">
                        <div className='card__price'>
                            <p>Price</p>
                            <p>$148.00</p>
                        </div>
                        <div className='card__cart'>
                            <img src="/shopping-bag.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card