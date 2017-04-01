import { observable } from 'mobx'
import WorkItem from '../models/WorkItem'

class WorkStore {
    @observable root: WorkItem = new WorkItem()
    @observable message: string = "This is a test"
}

const workStore = new WorkStore()
workStore.root.title = "Hi"

export var root: WorkItem = workStore.root
export default workStore

// TODO: remove temp games for debugging

for (let x = 0; x < 5; x++) {
    var child = new WorkItem(`child ${x}`)
    root.pushChild(child)
}

var childRef = root.children[1]

for (let x = 0; x < 5; x++) {
    var grandchild = new WorkItem(`grandchild ${x}`)
    childRef.pushChild(grandchild)
}