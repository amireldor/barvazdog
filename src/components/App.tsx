
import * as React from 'react'
import { observer } from 'mobx-react'
import workStore, { root } from '../stores/WorkStore'

@observer
class App extends React.Component<undefined, undefined> {
    public render() {
        return (<div>
            <strong>root title (observable WorkItem) {root.title}</strong><br/>
            <strong>message (observable regular var): {workStore.message}</strong>

            {root.children.map((item, index) => {
                return <div key={index}>{index} <em>item</em> {item.title}</div>
            })}

        </div>)
    }
}

export default App