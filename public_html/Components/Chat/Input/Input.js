import css from './Input.less';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.prefix = 'chat-input';
    }
    render() {
        return(
            <div className={`${this.prefix}`}>
                <input className={`${this.prefix} input-area`} placeholder='Type in the chat here!'/>
            </div>
        );
    }
}

export default Input;
