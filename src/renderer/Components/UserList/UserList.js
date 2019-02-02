import css from './UserList.less';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.prefix = 'user-list';
    }
    render() {
        return(
            <div className={`${this.prefix}`}>
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                    <li>User 3</li>
                    <li>User 4</li>
                    <li>User 5</li>
                </ul>
            </div>
        );
    }
}

export default UserList;
