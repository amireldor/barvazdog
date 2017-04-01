import * as React from 'react'
import { observer } from 'mobx-react'
import * as ContentEditable from 'react-contenteditable'

import WorkItem from '../models/WorkItem'

import * as styles from './NotebookItem.styl'

interface NotebookItemProps {
    item: WorkItem
}

interface NotebookItemState {
    title: string
}

@observer
class NotebookItem extends React.Component<NotebookItemProps, NotebookItemState> {
    constructor(props) {
        super(props)
        this.state = {
            title: props.item.title
        }
    }

    static renderChildren(children) {
        if (children.length <= 0) {
            return ''
        }

        return children.map((item, index) => {
            return <NotebookItem item={item} key={index} />
        });
    }

    onChange(event) {
        this.setState({ title: event.target.value })
    }

    render() {
        return (<div className={styles.notebookItem}>
            <ContentEditable
                className={styles.title}
                html={this.state.title}
                onChange={this.onChange.bind(this)} />
            <div className={styles.children}>{NotebookItem.renderChildren(this.props.item.children)}</div>
        </div>)
    }
}

export default NotebookItem