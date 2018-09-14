import css from './History.less';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.prefix = 'chat-history';
    }
    renderMessage(message, index) {
        if (index < this.props.messages.length - 10) {
            return null;
        }
        return(
            <p className={`${this.prefix} item`} key={index}>{message}</p>
        );
    }
    render() {
        return(
            <div className={`${this.prefix}`}>
                {this.props.messages.length > 0
                    ?   <div>
                            {this.props.messages.map(this.renderMessage.bind(this))}
                        </div>
                    :   <p>Chat will show up here</p>
                }
            </div>
        );
    }
}

export default History;
