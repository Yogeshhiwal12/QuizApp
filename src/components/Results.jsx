import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class Results extends Component {
    constructor (props){
        super(props);
        this.state={
            numberofQuestions:0,
            numberofAnswerQuestion:0,
            
            score:0,
            correctAnswer:0,
            wrongAnswer:0
        }
    }
    
    componentDidMount(){
        const {state}=this.props;
        if(state){
              this.setState({
            numberofQuestions:state.numberofQuestions,
            numberofAnswerQuestion:state.numberofAnswerQuestion,
            score:(state.score/state.numberofQuestions)*100,
            correctAnswer:state.correctAnswer,
            wrongAnswer:state.wrongAnswer
        })
        }
      
    }
  render() {
    const {score}=this.props;
    let results,remark;
    if(score<=30){
        remark="you Need More Practice!";
    }
    else if(score>30 &&score<=50){
        remark="Better Luck Next time"
    }else if(score<= 70 && score>50){
        remark="You can Do Better!"
    }else if(score>=71 &&score<=84){
        remark="You did Great"
    }else{
        remark="Yu are an absolute genius";
    }
    if(this.props!==undefined){
        results=(
            <Fragment>
                <section>
                <div>
                    <span></span>
                </div>
                <h1>Quiz had ended</h1>
                <div className="container">
                    <h4 className='test'>{remark}</h4>
                    <h2 className='test'>Your Score:{this.score}</h2>
                    <span className='test'>Total No of Answer Question:</span>
                    <span className='test'>{this.state.numberofAnswerQuestion}</span><br />

                    <span className='test'>Correct Answers:</span>
                    <span className='test'>{this.state.correctAnswer}</span><br />

                    <span className='test'>Wrong Answers:</span>
                    <span className='test'>{this.state.wrongAnswer}</span><br />
                    <span className='test'>Total No of Question:</span>
                    <span className='test'>{this.state.numberofQuestions}</span><br />
                </div>
                
                    <ul>
                        <li>
                            <Link to="/">Back to Home</Link>
                        </li>
                        <li>
                            <Link to="/start">Start Again</Link>
                        </li>
                    </ul>
                </section>
            </Fragment>
        )
    }else{
        results=(<Fragment><h1>No Reslts Pleae take the Quiz</h1>
        <ul>
            <li>
            <Link to ="/" > Back to home</Link>
            </li>
            <li>
                <Link to="/start">Take Quiz</Link>
            </li>
            
        </ul>
        </Fragment>
        )
    }
    console.log(this.props);
    return (
      <Fragment>
        <Helmet>
            <title>Results</title>
        </Helmet>
        {results}
      </Fragment>
    )
  }
}
export default Results;