import React from 'react'

class Batatinha extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 'Hello World'}
    }
    handleChange = (e) => this.setState({ value: e.target.value })
    componentDidMount() {
        //...
    }
    componentWillUnmount() {
        //...
    }
    render() {
        return (
            <div>
                <h1>Batatinha quando nasce</h1><br/>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <br/>
                <br/>
                <p>{this.state.value}</p>
            </div>
        )
    }
}

export default Batatinha