
// create and print h1 using js

// const heading = document.createElement("h1");

// heading.innerHTML = "Namaste React using Javascript";

// const root = document.getElementById('root');

// root.appendChild(heading);

// create and print html element using React

const heading1 = React.createElement("h1",{id:'heading1'},"Namaste React Heading 1 using React");

const heading2 = React.createElement("h2",{id:'heading2'},"Heading 2 using React");

const container = React.createElement("div",{className:'container',id:'container'},[heading1,heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);
