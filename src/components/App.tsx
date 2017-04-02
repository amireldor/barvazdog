import * as React from 'react'
import { observer } from 'mobx-react'
import workStore, { root } from '../stores/WorkStore'

import * as styles from './App.styl'

import NotebookItem from './NotebookItem'
import TestComponent from './temp'

@observer
class App extends React.Component<undefined, undefined> {  // TODO: add interface(s)
    public render() {
        return <TestComponent/>
        /*return (<div className={styles.app}>
            <strong>root title (observable WorkItem) {root.title}</strong><br/>
            <strong>message (observable regular var): {workStore.message}</strong>
            <div className={styles.notebook}><NotebookItem item={root}/></div>
        </div>)*/
    }
}

export default App