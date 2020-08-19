import React, {Component} from 'react'

import './QuizBox.scss'

// const QuizNow = props => {


//     return(<div className={'QuizBox'}>
//         <div className={'HeaderTxtQuiz'}>
//             <span>Whats app?</span>
//             <span>2/10</span>
//         </div>
//         <ul className={'QuizAnswers'}>
//             {props.quiz.map((answer, index)=>{
//                 return(
//                     <li key={index}>{answer}</li>
//                 )
//             })}
//         </ul>
//     </div>
//     )
// }

// export default QuizNow

export default class QuizBox extends Component {
    render() {
        return(
        <div className={'QuizBox'}>
        <div className={'HeaderTxtQuiz'}>
            <span>{this.props.txtHeader}</span>
            <span>{this.props.key} /5</span>
        </div>
        <ul className={'QuizAnswers'}>
            {this.props.txtAnswer.map((item)=>{
                return(
                    <li>{item}</li>
                )
            })}
        </ul>
    </div>
    )}
}