import css from './Footer.less';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.prefix = 'footer';
    }
    render() {
        return(
            <div className={`${this.prefix}`}>
                <span>&copy;2018</span>
            </div>
        );
    }
}

export default Footer;
