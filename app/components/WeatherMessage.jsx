var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function(){
//         var {location,temp} = this.props;
//         return(
//             <p>It's it {temp} in {location}</p>
//         );
//     }
// });


var WeatherMessage = (props) =>{
    var {location,temp} = props;
    return(
        <p className="text-center">It's it {temp} in {location}</p>
    );

};

module.exports = WeatherMessage;
