

/*
    <div id="parent">
        <div id="child">
            <h1>Hello world from react</h1>
        </div>
    </div>


    ReactElement(Object)=>HTML(brower can understand);

*/


const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"I am h1 tag from react"),
        React.createElement("h2",{},"I am h2 tag from react"),
        React.createElement("h3",{},"I am h3 tag from react")]
    ),
    React.createElement("div",{id:"chil2"},
        [React.createElement("h1",{},"I am h1 tag from react"),
        React.createElement("h2",{},"I am h2 tag from react"),
        React.createElement("h3",{},"I am h3 tag from react")]
    )]
);


// we have JSX to get rid from above mess

console.log(parent);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);



// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from react js!"
// );
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root);

// root.render(heading);
