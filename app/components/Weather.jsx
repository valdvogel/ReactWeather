var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWheaterMap = require('openWheaterMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            isLoading:false
        }
    },
    handleSearch: function(location){
        var that = this;

        //debugger;

        this.setState({
            isLoading:true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });
        openWheaterMap.getTemp(location).then( function(temp){
            that.setState({
                location : location,
                temp: temp,
                isLoading:false
            });
        }, function(e){
            that.setState({
                isLoading:false,
                errorMessage: e.message
            });
            alert(errorMessage);
        });
        
        
    },

    componentDidMount: function()
    {
        var location = this.props.location.query.location;
        if(location && location.length >0){
            this.handleSearch(location);
            window.location.hash = '#/';

        }

    },
    componentWillReceiveProps: function(newProps){
        var location = newProps.props.location.query.location;
        if(location && location.length >0){
            this.handleSearch(location);
            window.location.hash = '#/';

        }
    },
    render : function(){
        var {isLoading,location, temp,errorMessage} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3 className="text-center">Fetching weather...</h3>;
            }
            else if(temp && location){
                return <WeatherMessage temp={temp} location={location} />;
            }

        }
        function renderError(){
            //debugger
            if(typeof errorMessage === 'string'){
                return (
                    <ErrorModal message={errorMessage}/>
                )
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});


module.exports = Weather;