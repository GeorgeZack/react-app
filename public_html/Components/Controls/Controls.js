import { ReactSvgInjector } from "react-svg-injector";
import css from './Controls.less';
import play from '../../Assets/play.svg';
import pause from '../../Assets/pause.svg';
import replay from '../../Assets/replay.svg';
import fastForward from '../../Assets/fast_forward.svg';
import fastRewind from '../../Assets/fast_rewind.svg';

class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: this.props.isPlaying
        };
    }
    getCurrentX() {
        if (!this.props.audio.currentTime > 0) {
            return 0;
        }
        return (this.props.audio.currentTime / this.props.audio.duration) * 100;
    }
    getTimeFormat(/*string*/ time) {
        let sec_num = parseInt(time, 10);
        let hours = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        let seconds = sec_num - (hours * 3600) - (minutes * 60);
        
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        
        if (isNaN(seconds) && isNaN(minutes)) {
            return "00:00";
        } else {
            return minutes+':'+seconds;
        }
    }
    onClickForward() {
        this.props.audioForwardRewind(true);
        this.setState({ isPlaying: true });
    }
    onClickPlayPause() {
        this.props.audioPlayPause(!this.props.isPlaying);
        this.setState({ isPlaying: !this.props.isPlaying });
    }
    onClickRewind() {
        this.props.audioForwardRewind(false);
        this.setState({ isPlaying: true });
    }
    onClickReplay() {
        this.props.audio.currentTime = 0;
        this.props.audioPlayPause(true);
        this.setState({ isPlaying: true });
    }
    render() {
        const currentTime = this.getTimeFormat(this.props.audio.currentTime);
        const totalTime = this.getTimeFormat(this.props.audio.duration);
        const scrubber = this.getCurrentX(); 
        return (
            <div className={`controls ${this.props.breakpoint}`}>
                <div className="controls-scrubber">
                    <div className="inner" style={{width: scrubber + '%'}} />
                    <div className="handle" style={{left: (scrubber - 0.5) + '%'}} />
                </div>
                <div className="controls-inner">
                    <div className="controls-replay" onClick={this.onClickReplay.bind(this)}>
                        <ReactSvgInjector className="replay" src={replay} />
                    </div>
                    {/*<div className="control" onClick={this.onClickRewind.bind(this)}>
                        <ReactSvgInjector className="fast-rewind" src={fastRewind} />
                    </div>*/}
                    {this.state.isPlaying &&
                        <div className="control" onClick={this.onClickPlayPause.bind(this)}>
                            <ReactSvgInjector className="pause" src={pause}/>
                        </div>
                    }
                    {!this.state.isPlaying &&
                        <div className="control" onClick={this.onClickPlayPause.bind(this)}>
                            <ReactSvgInjector className="play" src={play}/>
                        </div>
                    }
                    {/*<div className="control" onClick={this.onClickForward.bind(this)}>
                        <ReactSvgInjector className="fast-forward" src={fastForward} />
                    </div>*/}
                </div>
                <div className="controls-time">
                    {currentTime} | {totalTime}
                </div>
            </div>
        );
    }
}

export default Controls;
