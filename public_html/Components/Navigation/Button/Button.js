import css from './Button.less';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.prefix = 'nav-btn';
    }
    render() {
        const display = this.props.display || 'inline';
        
        return(
            <div className={`${this.prefix} ${this.props.isSelected ? 'selected' : ''} ${display}`} onClick={this.props.onClick}>
                <div className={`${this.prefix}-label`} dangerouslySetInnerHTML={{ __html: this.props.label }} />
            </div>
        );
    }
}

export default Button;
