
import * as React from 'react'
import { observer } from 'mobx-react'
import workStore, { root } from '../stores/WorkStore'

@observer
class App extends React.Component<undefined, undefined> {
    static renderChildrenList(children) {
        if (children.length <= 0) {
            return ''
        }

        return (<ul>
            {children.map((item, index) => {
                return (<li key={index}>
                    {item.title}
                    {App.renderChildrenList(item.children)}
                </li>)
            })}
        </ul>)
    }

    public render() {
        return (<div>
            <strong>root title (observable WorkItem) {root.title}</strong><br/>
            <strong>message (observable regular var): {workStore.message}</strong>
            {App.renderChildrenList(root.children)}
        </div>)
    }
}

export default App