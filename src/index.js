import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {

constructor(props){
super(props)

this.state = { latitude:25}

}





    render(){

        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (Error) => console.log(Error)
        );
        return(
            <div>{ this.state.latitude}</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root') 
)