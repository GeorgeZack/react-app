import { Transition, CSSTransition } from 'react-transition-group';
import Button from '../Button/Button';
import css from './Dropdown.less';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.prefix = 'dropdown';
    }
    onClick() {
        console.log(this.props);
    }
    renderLink(link /* Object */, index) {
        const array = link.props.children;
        const iterator = array.values();
        let label = '';
        
        for (const value of iterator) {
            if (value.type === "h1") {
                label = value.props.children;
                break;
            }
        }
        
        return(
            <Button
                display={'vertical'}
                dropdown={false}
                label={label}
                key={index}
                onClick={this.onClick.bind(this)}
            />
        );
    }
    render() {
        return(
            <CSSTransition
                in={this.props.isActive}
                timeout={300}
                classNames="slide"
                unmountOnExit
            >
                <div className={`${this.prefix}`} onClick={this.props.onClick}>
                    {this.props.links.map(this.renderLink.bind(this))}
                </div>
            </CSSTransition>
        );
    }
}

export default Dropdown;
