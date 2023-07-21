export default function NavBar(){
    return (
        <div className="navBar">
            <button id="homePage" className="navBarOptions navBarOptionsL">Home</button>
            <button className="navBarOptions navBarOptionsL" id="categories">Categories</button>
            <button className="navBarOptions navBarOptionsL" id="deals">Exlusive Deals</button>
            <button className="navBarOptions navBarOptionsL" id="newItems">New Additions</button>
            <input type="text" className="navBarOptions navBarOptionsL" id="searchItem" placeholder="Search for items"/>
            <button className="navBarOptions navBarOptionsR" id="account">Account</button>
            <button className="navBarOptions navBarOptionsR" id="cart">Cart</button>
        </div>
    );


    
}

