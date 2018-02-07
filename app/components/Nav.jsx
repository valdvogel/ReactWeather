var React = require('react');
var {Link,IndexLink}= require('react-router');


// var Nav = React.createClass({
//     render: function(){
//         return(
//             <div>
//                 <h1>nav</h1>
//                 <IndexLink to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}} >Get Weather</IndexLink>
//                 <Link to="/About" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
//                 <Link to="/Example" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Example</Link>
//             </div>
            
//         );
//     }

// });


var Nav = (props) => {
    return(
        <div>
            <h1>nav</h1>
            <IndexLink to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}} >Get Weather</IndexLink>
            <Link to="/About" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
            <Link to="/Example" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Example</Link>
        </div>
        
    );
};

module.exports = Nav;