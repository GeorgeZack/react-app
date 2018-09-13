import { Route, Switch, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Transition, CSSTransition } from 'react-transition-group';
import * as Components from '../Components/Components';
import css from './App.less';

const components = Components.Components;
const articles = Articles.Articles;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breakpoint: '',
        };
        this.container = null;
        this.handleWindowResize = this.onWindowResize.bind(this);
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize, false);
        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                this.handleWindowResize();
            });
        });
		this.props.history.listen((location, action) => {
			this.onPageChange();
		});
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }
    getBreakPoint() {
    	const $windowsize = jQuery(window).width();
    	if ($windowsize >= 1200) {
    		return 'xl';
    	} else if ($windowsize < 1200 && $windowsize >= 992) {
            return 'lg';
        } else if ($windowsize < 992 && $windowsize >= 768) {
            return 'md';
        } else if ($windowsize < 768 && $windowsize >= 554) {
            return 'sm';
        } else {
    		return 'xs';
    	}
    }
    isMobile() {
        switch (this.getBreakPoint()) {
            case 'xs':
            case 'sm': {
                return true;
            }
            default: {
                return false;
            }
        }
    }
	onPageChange() {
        const top = $(this.container).offset().top;
        $('html, body').animate({scrollTop: top}, 250);
	}
    onWindowResize(e) {
        let breakpoint = this.getBreakPoint();
        this.setState({ breakpoint });
    }
    render() {
        return(
            <div className={`app ${this.state.breakpoint}`}>
				<p>Chat goes here</p>
            </div>
        );
    }
}

export default App;
