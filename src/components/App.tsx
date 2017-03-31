
import * as React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

class TestState {
    @observable time = 0

    public inc() {
        this.time++
    }
}

var state = new TestState()
setInterval(() => state.inc(), 1000)

@observer
class App extends React.Component<undefined, undefined> {
    public render() {
        return (<div>
            <h1>{state.time}</h1>
        </div>)
    }
}

export default App