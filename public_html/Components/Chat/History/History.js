import css from './History.less';

class History extends React.Component {
    constructor(props) {
        super(props);
        this.prefix = 'chat-history';
    }
    render() {
        return(
            <div className={`${this.prefix}`}>
                <p>Chat will show up here</p>
            </div>
        );
    }
}

export default History;
