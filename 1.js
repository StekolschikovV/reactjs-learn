var Hi = React.createClass({
    getInitialState: function () {
        return {
            count: 0
        }
    },
    plus: function(){
        if(this.state.count >= 5){
            this.setState({
                count: 0
            });
        } else {
            this.setState({
                count: this.state.count + 1
            });
        }
    },
    render: function () {
        return (
                <div class='myClass'>
                    <h1>{this.state.count}</h1>
                    <button 
                        type='button'
                        onClick={this.plus}>Click</button>
                </div>
           );
    }
})
React.render(<Hi src="sss"/>, document.body)
