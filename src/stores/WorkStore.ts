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

for (let x = 0; x < 5; x++) {
    root.pushChild(new WorkItem(`Hello ${x}`))   
    setTimeout(() => {
        root.title += ' check'
        root.pushChild(new WorkItem(`Delayed child ${x}`))
    }, (x + 1) * 300)
}
