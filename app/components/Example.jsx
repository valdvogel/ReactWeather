var React = require('react');
var {Link} = require('react-router');

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
            <h3 className="text-center">Example</h3>
            <p>Here are a few examples to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Vancouver">Vancouver, CA</Link>
                </li>
                <li>
                    <Link to="/?location=Rio">Rio, BR</Link>
                </li>
            </ol>
        </div>
    );

};

module.exports = Example;