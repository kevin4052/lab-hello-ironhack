import React from 'react';

const nav = <div className="nav-bar">
                <div>
                    <img src="./images/ironhack-logo.svg"/>
                </div>
                <div>
                    <img src="./images/menu-logo.svg"/>
                </div>
            </div>;
 
const App = () => { return (
    <div>
        {nav}
        <h1 className="app">Say hello to<br/>ReactJS</h1>
    </div>
)};
                
export default App;