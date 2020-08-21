import React, {Component} from 'react'

import './QuizBox.scss'


export default class QuizBox extends Component {
    state = {
        clssName: ''
    }

    
    render() {

        let styleLi = {}

        let checkRightAnswer = (index) => {
            if(index === this.props.rightAsnwer) {
                this.setState({clssName: 'Green'})
            } else this.setState({clssName: 'Orange'});
        }

        return(
        <div className={'QuizBox'}>
        <div className={'HeaderTxtQuiz'}>
            <span>{this.props.txtHeader}</span>
        <span>{this.props.id +1} / {this.props.numberAllQuiz}</span>
        </div>
        <ul className={'QuizAnswers'}>
            {this.props.txtAnswer.map((item, index)=>{
                return(
                    <li onClick={()=> checkRightAnswer(index)}
                        key={index}
                        className={this.state.clssName}
                        style={styleLi}
                        >{item}</li>
                )
            })}
        </ul>
    </div>
    )}
}