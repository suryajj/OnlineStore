import {Link} from "react-router-dom";


export default function NavBar(){
    return (
        <div className="navBar inner">
            <button id="homePage" className="navBarOptions navBarOptionsL"><Link to="/home">Home</Link></button>
            <button className="navBarOptions navBarOptionsL" id="categories"><Link to="/categories">Categories</Link></button>
            <button className="navBarOptions navBarOptionsL" id="deals"><Link to="/deals">Exlusive Deals</Link></button>
            <button className="navBarOptions navBarOptionsL" id="newItems"><Link to="/new-items">New Additions</Link></button>
            <input type="text" className="navBarOptions navBarOptionsL searchItems" placeholder="Search for items"/>
            <button className="navBarOptions navBarOptionsR" id="account"><Link to="/account">Account</Link></button>
            <button className="navBarOptions navBarOptionsR" id="cart"><Link to="/cart">Cart</Link></button>
        </div>
    );


    
}

