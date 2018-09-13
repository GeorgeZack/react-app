import ChatInput from './Input/Input';
import ChatHistory from './History/History';
import css from './Chat.less';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.prefix = 'chat-window';
    }
    render() {
        return(
            <div className={`${this.prefix}`}>
                <ChatHistory/>
                <ChatInput/>
            </div>
        );
    }
}

export default Chat;
