import React, {Component} from 'react'

import './QuizBox.scss'


export default class QuizBox extends Component {

    checkLi = (idLi) => {
        //console.log(`checkLi`)
    }
    

    render() {
        return(
        <div className={'QuizBox'}>
        <div className={'HeaderTxtQuiz'}>
            <span>{this.props.txtHeader}</span>
        <span>{this.props.id +1} / {this.props.numberAllQuiz}</span>
        </div>
        <ul className={'QuizAnswers'}>
            {this.props.txtAnswer.map((item, index)=>{
                return(
                    <li onClick={()=>this.props.checkRightAnswer(this.props.id, index)} idLi={index}>{item}</li>
                )
            })}
        </ul>
    </div>
    )}
}