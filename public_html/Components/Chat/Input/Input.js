import css from './Input.less';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            changed: false,
            input: ''
        }
        this.prefix = 'chat-input';
        this.timer = null;
    }
    handleKeyPress(event) {
        if (event.key === "Enter" && !event.shiftKey) {
            if (this.state.input.length > 0) {
                this.props.postChat(this.state.input);
                this.setState({ input: '' });                
            }
            event.preventDefault();
        } else if (event.key === "Enter" && event.shiftKey) {
            setTimeout(() => {
                let input = this.state.input;
                input = input + "<br />";
                this.setState({ input });
            });
        }
    }
    handleInputChange(event) {
        console.log(event.target.value);
        const input = event.target.value;
        if (input.length > 500) {
            
        }
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(this.onTextChangeTimeout.bind(this), 500000)
        this.setState({
            changed: true,
            input
        });
    }
    onTextChangeTimeout() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        this.setState({ changed: false });
    }
    render() {
        return(
            <div className={`${this.prefix}`}>
                <textarea
                    className={`${this.prefix}-input-area`}
                    onChange={(evt) => this.handleInputChange(evt)}
                    onKeyPress={(evt) => this.handleKeyPress(evt)}
                    placeholder="Type in the chat here!"
                    value={this.state.input}
                />
                {this.state.changed &&
                    <p className={`${this.prefix}-typing`}>USER IS TYPING</p>
                }
            </div>
        );
    }
}

export default Input;
