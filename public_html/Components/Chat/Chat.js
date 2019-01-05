import ChatInput from './Input/Input';
import ChatHistory from './History/History';
import css from './Chat.less';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			chatHeight: 0,
			historyHeight: 0,
            messages: []
        };
        this.prefix = 'chat-window';
    }
	componentDidMount() {
		const chatHeight = ReactDOM.findDOMNode(this.chatInput) || {};
        const historyHeight = ReactDOM.findDOMNode(this.chatHistory) || {};
		this.setState({
			chatHeight,
			historyHeight
		});
	}
    postChat(msg /* String */) {
        let messages = this.state.messages;
        messages.push(msg);
        this.setState({ messages });
    }
    render() {
        const historyStyle = { height: this.state.historyHeight - this.state.chatHeight };
		console.log(this.state);
		console.log(this.chatInput, this.chatHistory);
        return (
            <div className={`${this.prefix}`}>
                <ChatHistory
                    ref={ elem => {if (elem) { this.chatHistory = elem; }}}
                    messages={this.state.messages}
                    messageLimit={this.props.messageLimit}
                    style={typeof historyStyle === 'object' && historyStyle}
                />
                <ChatInput
                    ref={ elem => {if (elem) { this.chatInput = elem; }}}
                    postChat={this.postChat.bind(this)}
                />
            </div>
        );
    }
}

export default Chat;
