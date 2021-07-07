import React from 'react';
import ReactDOM from 'react-dom'

const App = () =>{
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (Error) => console.log(Error)
    );
    
    return(
        <div>
            latitude:
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.querySelector('#root') 
)