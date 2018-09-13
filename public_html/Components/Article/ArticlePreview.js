import css from './ArticlePreview.less';

class ArticlePreview extends React.Component {
    constructor(props) {
        super(props);
        this.prefix = 'article-preview';
    }
    onMoreClick() {
        console.log("Read More");
    }
    renderContent() {
        const html = this.props.html;
        const previewContents = html.props.children || [];
        let preview = {};
        let stop = [0, 0];
        let child = '';
        let stringToReduce = '';
        let stringToDisplay = '';
        let isComplete = false;
        
        previewContents.some((element, index) => {
            
            if (element.type && element.type === 'h1' && element.props.children) {
                stringToReduce = stringToReduce + '<h1>' + element.props.children + '</h1>';
                stop[0] = 1;
            }
            if (element.type && element.type === 'p' && element.props.children) {
                child = element.props.children;
                if (typeof(child) === 'object') {
                    let array = Object.values(child);
                    array.forEach((el,i) => {
                        if (typeof(el) === 'object' && el.props && el.props.children) {
                            stringToReduce = stringToReduce + "<" + el.type + ">" + el.props.children + "</" + el.type + ">";
                        } else {
                            stringToReduce = stringToReduce + el;
                        }
                    });
                }
                if (typeof(child) === 'string') {
                    stringToReduce = stringToReduce + child;
                }
                stringToReduce = stringToReduce.split('',500);
                stringToReduce.push(" ...");
                stringToDisplay = stringToDisplay + stringToReduce.join('');
                stop[1] = 1;
            }
            stop.every( (j) => {
                if (j === 1) {
                    isComplete = true
                }
            });
            if (isComplete) {
                return preview = stringToDisplay;
            }
        });
        
        return <div dangerouslySetInnerHTML={{ __html: preview }} />;
    }
    render() {
        return(
            <div className={`${this.prefix}`}>
                <div className={`${this.prefix}-body`}>
                    {this.renderContent()}
                    <p className={`${this.prefix}-read-more`} onClick={this.onMoreClick.bind(this)}>Read More...</p>
                </div>
            </div>
        );
    }
}

export default ArticlePreview;
