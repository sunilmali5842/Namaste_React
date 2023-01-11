import React from "react";
import ReactDOM from "react-dom/client";

// Print using JSX

const heading1 = (
    <>
<h1 className="h1heading" id="h1title" style={{
    background:'yellow',padding:'10px',margin:'auto',maxWidth:'50%'}}> Hello Guys, This heading is printed using JSX</h1>
<h3>Heading using h3 tag using JSX</h3>
</>
);

// React component
// 1) Functional component
// 2) Class based component

const FirstComponent = () => {
    return (
        <h4>Hello Guys, This is my first component</h4>
    );
}
const SecondComponent = function() {
    return (
        <h4>Hello Guys, This is my Second Component</h4>

    );
    
}
    

const HeaderComponent = () =>(
    <>
    {heading1}
    <FirstComponent/>
    <SecondComponent/>
    </>
)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeaderComponent/>);