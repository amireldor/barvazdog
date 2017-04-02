import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { observer } from 'mobx-react'
import * as ContentEditable from 'react-contenteditable'
import * as Combokeys from 'combokeys'

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
    private combokeys: any

    constructor(props) {
        super(props)
        this.state = {
            title: props.item.title
        }
    }

    componentDidMount() {
        var node = ReactDOM.findDOMNode(this.refs.title)
        node = document.querySelector('input')
        this.combokeys = new Combokeys(node)
        console.log(node)
        this.combokeys.bind('down', () => {
            console.log('DOWN!')
        })
        this.combokeys.bind('4', () => {
            console.log('four!')
        })
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
                className={styles.title + ' fun'}
                html={this.state.title}
                onChange={this.onChange.bind(this)} />
            <input value="amir" ref="title" onChange={this.onChange.bind(this)} />
            <div className={styles.children}>{NotebookItem.renderChildren(this.props.item.children)}</div>
        </div>)
    }
}

export default NotebookItem