import { observable } from 'mobx'
import WorkItem from '../models/WorkItem'

class WorkStore {
    @observable root: WorkItem = new WorkItem()
    @observable message: string = "This is a test"
}

const workStore = new WorkStore()
workStore.root.title = "Hi"

setTimeout(() => {
    workStore.root.title = "Denmark"
    workStore.message = "hey..."
}, 800)

export var root: WorkItem = workStore.root
export default workStore