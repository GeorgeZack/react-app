// Initial welcome page. Delete the following line to remove it.
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import App from './App/App';

const browserHistory = createBrowserHistory();

ReactDOM.render(
    <Router history={browserHistory}>
		<App history={browserHistory} />
    </Router>,
	document.getElementById('app')
);
