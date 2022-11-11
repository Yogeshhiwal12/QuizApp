import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Quiz App-Home</title>
            </Helmet>
                <section>
                    
                    <h1>IQ Quiz</h1>
                    
                    <div>
                        <ul>
                            
                                <Link  className ="btn btn-primary mt-5 quiz "to="/start/instrutions"> Start Quiz</Link> 
                            
                        </ul>
                    </div>
                    <div className="auth-container">
                        <Link className="btn btn-primary " id='loginbutton' to="/login">Login/</Link>
                        <Link  className="btn btn-primary" id='registerbutton' to="/register">Register</Link>
                    </div>
                </section>
        </Fragment>

    )
}

export default Home
