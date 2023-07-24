import JustTwo from "./JustTwo";
export default function MainDisplay(){
    
    
    return (
        <div className="display">
            
            <img className="image1 w-96 shadow-2xl" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1452&q=80" />

            <div className="displayText text-9xl text-teal-400 text-opacity-100">Where things are made&nbsp;<JustTwo/>&nbsp;for you</div>

            <img className="image2 w-52 shadow-2xl" src="https://images.unsplash.com/photo-1567027757540-7b572280fa22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"/>

        </div>
    );
}