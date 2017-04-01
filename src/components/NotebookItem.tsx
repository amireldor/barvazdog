import * as React from 'react'
import { observer } from 'mobx-react'

import WorkItem from '../models/WorkItem'

import * as styles from './NotebookItem.styl'

interface NotebookItemProps {
    item: WorkItem
}

@observer
class NotebookItem extends React.Component<NotebookItemProps, undefined> {
    static renderChildren(children) {
        if (children.length <= 0) {
            return ''
        }

        return children.map((item, index) => {
            return <NotebookItem item={item}/>
        });
    }

    render() {
        return (<div className={styles.notebookItem}>
            <div className={styles.title} contentEditable>{this.props.item.title}</div>
            <div className={styles.children}>{NotebookItem.renderChildren(this.props.item.children)}</div>
        </div>)
    }
}

export default NotebookItem