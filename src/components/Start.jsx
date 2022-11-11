import React, { Component, Fragment } from 'react'
import M from 'materialize-css';
import { useNavigate } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import question from "../question.json"
import isEmpty from '../utils/is-empty';

 class Start extends Component {
     
    constructor(props){
        super(props);
        this.state={
            
            question,
            currentQuestion:{},
            nextQuestion:{},
            previousQuestion:{},
            answer:'',
            numberofQuestions:0,
            numberofAnswerQuestion:0,
            currentQuestionIndex:0,
            score:0,
            correctAnswer:0,
            wrongAnswer:0
            
        };   
    }
    componentDidMount(){
        const {question,currentQuestion,nextQuestion,previousQuestion}=this.state;
        this.displayQuestions(question,currentQuestion,nextQuestion,previousQuestion);
    }
    displayQuestions=(question=this.state.question,currentQuestion,nextQuestion,previousQuestion)=>{
        let {currentQuestionIndex}=this.state;
        if(!isEmpty(this.state.question)){
            question=this.state.question;
            currentQuestion=question[currentQuestionIndex];
            nextQuestion=question[currentQuestionIndex + 1];
            previousQuestion=question[currentQuestion - 1];
            const answer=currentQuestion.answer;
            this.setState({
                currentQuestion,
                nextQuestion,
                previousQuestion,
                numberofQuestions:question.length,
                answer

            });

        }
    };
    handlePreviousButtonClick=()=>{
        if(this.state.previousQuestion!==undefined){
            this.setState(prevState=>({
                currentQuestionIndex:prevState.currentQuestionIndex - 1
            }),()=>{
                this.displayQuestions(this.state.state,this.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
            })
        }

    };
    handleNextButtonClick=()=>{
        if(this.state.nextQuestion!==undefined){
            this.setState(prevState=>({
                currentQuestionIndex:prevState.currentQuestionIndex + 1
            }),()=>{
                this.displayQuestions(this.state.state,this.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
            })
        }

    };
    handleButtonClick=(e)=>{
        switch(e.target.id){
            case 'next-button':
                this.handleNextButtonClick();
                break;

            case 'previous-button':
                this.handlePreviousButtonClick();
                break;

            case 'quit-button':
                this.handleQuitButtonClick();
                break;

            default:
                break;
        }
    }
    handleQuitButtonClick=()=>{
       if( window.confirm("Are You sure You want to quit?")){
        this.props.navigate('/results');
       };
    }
    handleOptionClick=(e)=>{
       if(e.target.innerHTML.toLowerCase()===this.state.answer.toLowerCase()){
        this.correctAnswer();
       }else{
        this.wrongAnswer();
       }
    }
   
    correctAnswer=()=>{
        M.toast({
            html:"Correct Answer",
            classes:'toast-valid',
            displayLength:1500
        });
        this.setState(prevState=>({
            score:prevState.score + 1,
            correctAnswer:prevState.correctAnswer + 1,
            currentQuestionIndex:prevState.currentQuestionIndex + 1,
            numberofAnswerQuestion:prevState.numberofAnswerQuestion +1
        }),()=>{
            if(this.state.nextQuestion===undefined){
                this.endQuiz();
            }
            else{
                this.displayQuestions(this.state.question,this.state.currentQuestion,this.state.previousQuestion,this.state.nextQuestion);
            }
        });
    }
    wrongAnswer=()=>{
        navigator.vibrate(1000);
        M.toast({
            html:"Wrong Answer",
            classes:'toast-invalid',
            displayLength:1500
        });
        this.setState(prevState=>({
            wrongAnswer:prevState.wrongAnswer + 1,
            currentQuestionIndex:prevState.currentQuestionIndex + 1,
            numberofAnswerQuestion:prevState.numberofAnswerQuestion+1
        }),()=>{
            if(this.state.nextQuestion===undefined){
                this.endQuiz();
            }
            else{
                this.displayQuestions(this.state.question,this.state.currentQuestion,this.state.previousQuestion,this.state.nextQuestion);
            }
            
        })
    }
        endQuiz=()=>{
            alert('quiz has ended')
            const {state}=this;
            const studentStats={
                score:state.score,
                numberofQuestions:state.numberofQuestions,
                numberofAnswerQuestion:state.numberofAnswerQuestion,
                correctAnswer:state.correctAnswer,
                wrongAnswer:state.wrongAnswer
            }
            console.log(studentStats);
            setTimeout(()=>{
                this.props.navigate('/results');
            },1000);
        }
  render() {
   
    const {currentQuestion,currentQuestionIndex,numberofQuestions}=this.state;
    return (
      <Fragment>
        <Helmet><title>Quiz</title></Helmet>
        <div className='question'>
            <div className='quizquestion'>{currentQuestionIndex+1}of {numberofQuestions}</div>
            <h5 className='quizquestion'>{currentQuestion.question}</h5>
            <div className="option-container  mt-3"><button onClick={this.handleOptionClick} className=' ms-2 btn btn-primary'>{currentQuestion.optionA}</button>
                <button onClick={this.handleOptionClick}  className=' mcq  btn btn-primary ms-2'>{currentQuestion.optionB}</button>
                
                </div>
                <div className="option-container  mt-3">
                <button onClick={this.handleOptionClick} className=' mcq btn btn-primary ms-2'>{currentQuestion.optionC}</button>
                <button onClick={this.handleOptionClick}  className=' mcq btn btn-primary ms-2'>{currentQuestion.optionD}</button>
                </div>
           
            <div className="option-container mt-5">
                <button className='mcq ms-2 btn btn-secondary ' id="previous-button"onClick={this.handleButtonClick}>Previous</button>
                <button className='mcq ms-2 btn btn-success' id="next-button" onClick={this.handleButtonClick}>Next</button>
                <button className='mcq ms-2 btn btn-danger' id="quit-button" onClick={this.handleButtonClick}>end</button>
            </div>
        </div>
      </Fragment>
    )
  }
}
export function STARTWithRoter(props){
    const navigate=useNavigate()
    return(<Start navigate={navigate}>
        
    </Start>)
}
export default Start
