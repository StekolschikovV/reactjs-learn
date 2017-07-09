var PLAYER_ID = 'player';
var Player = React.createClass({
    componentDidMount: function() {
        document.getElementById(PLAYER_ID).addEventListener( 'ended', this.props.onEnded )
    },
    componentWillUnmount: function() {
        document.getElementById(PLAYER_ID).removeEventListener( 'ended', this.props.onEnded )
    },
    render: function () {
        return (
            <video
                id={PLAYER_ID}
                autoPlay="true"
                controls
                src={this.props.src}>
        </video>
        )
    }
});

var masV = [
    "http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4",
    "http://techslides.com/demos/sample-videos/small.mp4"
]

var PlayerContainer = React.createClass({
    getInitialState : function() {
        return {
            i: 0
        }
    },
    onEnded: function () {

        var newI = this.state.i + 1;
        if( newI >= masV.length) newI = 0
        this.setState({
            i: newI
        })
    },
    render: function() {
        return <Player
            src={masV[this.state.i]}
            onEnded={this.onEnded}/>
    }
});
React.render(
    <PlayerContainer />,
    document.body
);