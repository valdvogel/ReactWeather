var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWheaterMap = require('openWheaterMap');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            isLoading:false
        }
    },
    handleSearch: function(location){
        var that = this;

        //debugger;

        this.setState({isLoading:true});
        openWheaterMap.getTemp(location).then( function(temp){
            that.setState({
                location : location,
                temp: temp,
                isLoading:false
            });
        }, function(errorMessage){
            that.setState({isLoading:false});
            alert(errorMessage);
        });
        
        
    },
    render : function(){
        var {isLoading,location, temp} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather...</h3>;
            }
            else if(temp && location){
                return <WeatherMessage temp={temp} location={location} />;
            }

        }
        return (
            <div>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});


module.exports = Weather;