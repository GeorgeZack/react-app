import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import * as Articles from '../../../Articles/Articles';
import * as Buttons from './Buttons';
import css from './Header.less';

const articles = Articles.Articles;
const buttons = Buttons.Buttons;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: -1,
            showArticleList: false
        }
        this.prefix = 'header';
    }
    setIndex(index) {
        if (this.state.index === index) {
            index = -1;
        }
        this.setState({ index });
    }
    onClick(index) {
        this.setIndex(index);
        this.setState({ showArticleList: false });
    }
    onClickReveal(index) {
        this.setIndex(index);
        this.setState({ showArticleList: !this.state.showArticleList });
    }
    renderArticleList() {
        return(
            <Dropdown
                links={articles}
                isActive={this.state.showArticleList}
            />
        );
    }
    renderButton(button /* Object */, index) {
        let onClick = this.onClick.bind(this, index);
        if (button.isDropdown && button.isDropdown === true) {
            onClick = this.onClickReveal.bind(this, index);
        }
        return(
            <Button
                display={'inline'}
                label={button.label}
                isSelected={this.state.index === index}
                key={index}
                onClick={onClick}
            />
        );        
    }
    renderButtons() {
        let buttonArray = [];
        Object.entries(buttons).forEach(
            ([key, value]) => buttonArray.push(value)
        );
        return(
            <div className={`${this.prefix}-items`}>
                {buttonArray.map(this.renderButton.bind(this))}
            </div>
        );
    }
    render() {        
        return(
            <div className={`${this.prefix}-container`}>
                {this.renderArticleList()}
                <div className={`${this.prefix}-main`}>
                    {this.renderButtons()}
                    <div className={`${this.prefix}-accent-left`}/>
                    <div className={`${this.prefix}-accent-right`}/>
                </div>
            </div>
        );
    }
}

export default Header;
