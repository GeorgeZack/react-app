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
    handleEnterPress(event) {
        if (event.key === "Enter") {
            this.props.postChat(this.state.input);
            this.setState({ input: '' });
        }
    }
    handleInputChange(event) {
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(this.onTextChangeTimeout.bind(this), 1000)
        this.setState({
            changed: true,
            input: event.target.value
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
                <input
                    className={`${this.prefix} input-area`}
                    onChange={(evt) => this.handleInputChange(evt)}
                    onKeyPress={(evt) => this.handleEnterPress(evt)}
                    placeholder="Type in the chat here!"
                    value={this.state.input}
                />
                {this.state.changed &&
                    <p className={`${this.prefix} `}>USER IS TYPING</p>
                }
            </div>
        );
    }
}

export default Input;
