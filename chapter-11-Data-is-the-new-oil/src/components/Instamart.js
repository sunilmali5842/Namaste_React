import React, {lazy, Suspense,useState} from "react";

const Section = ({title,description}) => {

    const [isVisible,setIsVisible] = useState(false);

    return (
        <div className="container m-auto p-8 border box-shadow-md">
            <h1 className="font-medium text-2xl mb-4">{title}</h1>
            {isVisible ? <button className="underline" onClick={() => setIsVisible(false)}>Hide</button> :
            <button className="underline" onClick={() => setIsVisible(true)}>Show</button> }
            {isVisible && <p>{description} </p>}
            
        </div>
    )
};


const Instamart = () => {
    return (
        <>
        <div className="container m-auto my-16">
          <h1 className="text-4xl font-bold my-6">This is Instamart Page</h1>
          <h3>100's of components inside Instamart</h3>
        </div>

        <Section title={"About Us"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}/>
        
        <Section title={"Our Team"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}/>
      
       <Section title={"Careers"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}/>
        </>

        
    )
}

export default Instamart;