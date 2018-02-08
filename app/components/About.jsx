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
            <h3 className="text-center page-title">About</h3>
            <p>This is a weather application built with react</p>
            <p>Here are some of tools I used : </p>
            <ol>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used
                </li>
                <li>
                    <a href="https://openweathermap.org">Open Weather</a> - I used Open Weather Map to search for weather data by city name.
                </li>
            </ol>
        </div>
    );
};

module.exports = About;