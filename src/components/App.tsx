import * as React from 'react'
import { observer } from 'mobx-react'
import workStore, { root } from '../stores/WorkStore'

import * as styles from './App.styl'

@observer
class App extends React.Component<undefined, undefined> {  // TODO: add interface(s)
    static renderChildrenList(children) {
        if (children.length <= 0) {
            return ''
        }

        return (<ul>
            {children.map((item, index) => {
                return (<li key={index}>
                    <span>{item.title}</span>
                    {App.renderChildrenList(item.children)}
                </li>)
            })}
        </ul>)
    }

    public render() {
        return (<div>
            <strong>root title (observable WorkItem) {root.title}</strong><br/>
            <strong>message (observable regular var): {workStore.message}</strong>
            <div className={styles.board}>{App.renderChildrenList(root.children)}</div>
        </div>)
    }
}

export default App