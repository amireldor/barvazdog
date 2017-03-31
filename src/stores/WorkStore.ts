import { observable } from 'mobx'
import WorkItem from '../models/WorkItem'

class WorkStore {
    @observable root: WorkItem
}

const workStore = new WorkStore()

export var root: WorkItem = workStore.root
export default workStore