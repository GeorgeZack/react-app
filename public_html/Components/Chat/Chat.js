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
        return(
            <div className={`${this.prefix}`}>
                <ChatHistory
                    messages={this.state.messages}
                />
                <ChatInput
                    postChat={this.postChat.bind(this)}
                />
            </div>
        );
    }
}

export default Chat;
