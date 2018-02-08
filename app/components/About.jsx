var React = require('react');


// var About = React.createClass({
//     render: function() {
//         return (
//             <h3>About</h3>
//         );
//     }

// });

//STATELESS FUNCTIONAL COMPONENT
var About = (props) =>{
    return (
        <div>
            <h3>About</h3>
            <p>About page</p>
        </div>
    );
};

module.exports = About;