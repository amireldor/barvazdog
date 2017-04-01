
import * as React from 'react'
import { observer } from 'mobx-react'
import workStore, { root } from '../stores/WorkStore'

@observer
class App extends React.Component<undefined, undefined> {
    public render() {
        return (<div>
            <strong>root title (observable WorkItem) {root.title}</strong><br/>
            <strong>message (observable regular var): {workStore.message}</strong>
        </div>)
    }
}

export default App