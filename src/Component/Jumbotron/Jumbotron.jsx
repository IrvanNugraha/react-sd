import React from 'react';



const Jumbotron = () =>{
    return(
        <div className="jumbotron">
            <h1 className="display-4">Welcome To SombreroStudio Website</h1>
            <p className="lead">This studio is for recording and jamming</p>
            <hr className="my-4"/>
            <p className="lead">
                For more information
            </p>
            <a href="/lrnmo" className="btn glass">Learn More</a>
        </div>
    );
}

export default Jumbotron;