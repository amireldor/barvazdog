import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Combokeys from 'combokeys'

class TestComponent extends React.Component<any, any> {
    constructor() {
        super()
        this.state = {
            text: "Feed the monkeys, please."
        }
    }

    componentDidMount() {
        var node = ReactDOM.findDOMNode(this.refs.text)
        // var node:any = document  // if I do this, callback is called...
        console.log(node)  // shows element in console

        var combokeys = new Combokeys(node)
        combokeys.bind('down', () => {
            console.log('Well fed!')  // never called!
        })

        console.log(combokeys)  // I can see the callback above registered with
                                // the exact filename:line# of the callback
    }

    onChange(event) {
        this.setState({ text: event.target.value })
    }

    render() {
        return <input value={this.state.text} ref="text" onChange={this.onChange.bind(this)} />
    }
}

export default TestComponent