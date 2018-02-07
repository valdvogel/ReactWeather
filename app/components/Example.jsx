var React = require('react');

// var Example = React.createClass({
//     render: function(){
//         return(
//             <h3>Example</h3>
//         );

//     }

// });


//STATELESS FUNCTIONAL COMPONENT
var Example = (props)=> {
    return(
        <div>
            <h3>Example</h3>
            <p>Example page</p>
        </div>
    );

};

module.exports = Example;