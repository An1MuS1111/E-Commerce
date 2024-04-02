import '@styles/Navbar.css'

const Navbar = () => {

    return (
        <>
            <div className="navbar">
                <div className="nav__left">
                    <img className="nav__icons" src="/world-wide-web.png" alt="" />
                    <a href="">New Featured</a>
                    <a href="">Men</a>
                    <a href="">Women</a>
                    <a href="">Kids</a>
                </div>
                <div className="nav__search">
                    <textarea className="nav__search-bar" placeholder='Search product' name="" id="" rows="1" autoComplete='on'></textarea>
                    <img src="" alt="" />
                </div>
                <div className="nav__right">
                    <img className="nav__icons" src="/notification.png" alt="" />
                    <img className="nav__icons" src="/comment.png" alt="" />
                    <img className="nav__icons" src="/shopping-cart.png" alt="" />
                    <img className="nav__icons" src="/user.png" alt="" />
                </div>


            </div>
        </>
    )
}



export default Navbar