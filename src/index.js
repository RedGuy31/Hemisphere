import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {

constructor(props){
super(props)

this.state = { latitude:25}

window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (Error) => console.log(Error)
);

}

    render() {
      
        return(
            <div>{ this.state.latitude}</div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root') 
)