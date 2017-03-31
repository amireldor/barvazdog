
import * as React from 'react'
import { observer } from 'mobx-react'
import { root } from '../stores/WorkStore'

@observer
class App extends React.Component<undefined, undefined> {
    public render() {
        return (<div>
            <h1>barvazdog dev</h1>
        </div>)
    }
}

export default App