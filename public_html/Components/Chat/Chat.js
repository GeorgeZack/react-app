import ChatInput from './Input/Input';
import ChatHistory from './History/History';
import css from './Chat.less';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        this.prefix = 'chat-window';
    }
    postChat(msg /* String */) {
        let messages = this.state.messages;
        messages.push(msg);
        this.setState({ messages });
    }
    render() {
        const historyHeight = ReactDOM.findDOMNode(this.chatHistory);
        const chatHeight = ReactDOM.findDOMNode(this.chatInput);
        const historyStyle = { height: historyHeight - chatHeight };
        return(
            <div className={`${this.prefix}`}>
                <ChatHistory
                    ref={ elem => {if (elem) { this.chatHistory = elem; }}}
                    messages={this.state.messages}
                    messageLimit={this.props.messageLimit}
                    style={historyStyle}
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
