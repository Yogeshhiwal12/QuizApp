import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
const Instructions = () => {
  return (
    <Fragment>
        <Helmet>
            <title>Instuctions</title>
        </Helmet>
        <section>
        <div>
      <h1>Please read the Instructions</h1>
        <ul>
            <li><p>Read the Questions Carefully </p></li>
            <li><p>You can select only one Option</p></li>
            <li><p>Maximum max 5</p></li>
            <li><p>Dont Try to open Another Tab during test</p></li>
           
        </ul>
      
    </div>
    <div className="auth-container mt-5">
    <Link    to="/">Take me back</Link>
                        <Link  to="/start">Let's Start</Link>
                        
                    </div>
        </section>
    </Fragment>
    
  )
}

export default Instructions
