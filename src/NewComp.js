import React, {Component} from 'react'
import {connect} from 'react-redux'

class NewComp extends Component {
    styles =  {
        color: 'purple',
        font: 'italics'
    };

    render() {
        return(
            <div className='App'>
                <h3 style = {this.styles}>{this.props.message}</h3>
                <button onClick={this.props.ButtonChange}>Change Message</button>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        message: state.message
    }
}
const mapDispatchtoProps = dispatch => {
    return {
        ButtonChange: () => dispatch({
            type: 'Message Change'
        }) 
    }
}

export default connect ( mapStatetoProps, mapDispatchtoProps ) (NewComp);
