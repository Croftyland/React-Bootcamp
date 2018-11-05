import React, {Component} from 'react';


 class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {addClass: false}
    }
    toggle() {
        this.setState({addClass: !this.state.addClass});
    }
    render() {
        let boxClass = ["box"];
        if(this.state.addClass) {
            boxClass.push('green');
        }
        return(
            <div className={boxClass.join(' ')} onClick={this.toggle.bind(this)}>{this.state.addClass ? "Watched" : "Unwatch"}</div>
        );
    }
}

export default Button;