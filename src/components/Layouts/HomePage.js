import React from 'react'
import './HomePage.css';
import LaunchInfo from '../LaunchInfo/LaunchInfo';


const HomePage = (props) => {
    return (
        <div className="HomePage">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <LaunchInfo />
        </div>
    )
}

export default HomePage