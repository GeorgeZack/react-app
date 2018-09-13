// NOT AN INDEPENDENT COMPONENT. TO WORK, BE PUT IN THE APP.JS
    constructor(props) {
        this.state = {
            isPlaying: false,
            audioCurrent: 0,
            audioList: Object.values(audio) || []
        };
    }
    audioForwardRewind(isForward) {
        if (this.state.audioList.length > 0) {
            let audioCurrent = this.state.audioCurrent;
            if (audioCurrent < this.state.audioList.length - 1 && isForward) {
                audioCurrent++;
            }
            if (audioCurrent !== 0 && !isForward) {
                audioCurrent--;
            }
            this.setState({ audioCurrent });
            setTimeout(() => {
                this.audioPlayPause(true);
            });
        }
    }
    audioOnEnded() {
        this.setState({ isPlaying: false });
    }
    audioPlayPause(isPlaying) {
        if (this.audio) {
            if (isPlaying) {
                this.audio.play();
            } else {
                this.audio.pause();
            }
        }
        this.setState({ isPlaying });
    }
    onTimeUpdate() {
        this.forceUpdate();
    }
    renderControls() {
        return(
            <components.Controls
                audio={this.audio || {}}
                breakpoint={this.state.breakpoint}
                audioForwardRewind={this.audioForwardRewind.bind(this)}
                audioPlayPause={this.audioPlayPause.bind(this)}
                isPlaying={this.state.isPlaying}
            />
        );
    }
    renderAudio() {
        const audioCurrent = this.state.audioList[this.state.audioCurrent];
        return(
            <div className="audio">
                <audio src={audioCurrent} ref={ (a) => this.audio = a } onEnded={this.audioOnEnded.bind(this)} onTimeUpdate={this.onTimeUpdate.bind(this)} />
                {this.renderControls()}
            </div>
        );
    }
