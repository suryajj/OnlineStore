import JustTwo from "./JustTwo";
export default function MainDisplay(){
    
    
    return (
        <div className="display">
            
            <img className="image1 w-96 shadow-2xl" src="https://i.pinimg.com/originals/1d/8f/2f/1d8f2fff49dd29efb7cc5448a83d83a0.png"  />

            <div className="displayText text-6xl text-teal-400 text-opacity-100">Where things are made&nbsp;<JustTwo/>&nbsp;for you</div>

            <img className="image2"/>

        </div>
    );
}