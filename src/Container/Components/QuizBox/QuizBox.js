import React, {Component} from 'react'

import './QuizBox.scss'


export default class QuizBox extends Component {
    render() {
        return(
        <div className={'QuizBox'}>
        <div className={'HeaderTxtQuiz'}>
            <span>{this.props.txtHeader}</span>
        <span>{this.props.id} / {this.props.numberAllQuiz}</span>
        </div>
        <ul className={'QuizAnswers'}>
            {this.props.txtAnswer.map((item)=>{
                return(
                    <li onClick={()=>this.props.checkRightAnswer(this.props.id)}>{item}</li>
                )
            })}
        </ul>
    </div>
    )}
}