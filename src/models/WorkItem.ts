import User from './User'
import MaxLengthString from '../utils/MaxLengthString'
import { observable } from 'mobx'

export const MAX_TITLE_LENGTH: number = 100
export const MAX_TEXT_LENGTH: number = 1000

class WorkItem {
    constructor(title: string = 'no title') {
        this.title = title
        this.text = ''
        this.children = new Array<WorkItem>()
        this.notes = new Array<WorkItem>()
        this.tags = new Array<string>()
        this.users = new Array<User>()
    }

    get title() { return this.privateTitle.get() }
    get text() { return this.privateText.get() }
    get children(): WorkItem[] { return this.privateChildren }
    get notes(): WorkItem[] { return this.privateNotes }
    get tags(): string[] { return this.privateTags }
    get users(): User[] { return this.privateUsers }

    set title(value: string) { this.privateTitle.set(value) }
    set text(value: string) { this.privateText.set(value) }
    set children(value: WorkItem[] ) { this.privateChildren = value }
    set notes(value: WorkItem[]) { this.privateNotes = value }
    set tags(value: string[]) { this.privateTags = value }
    set users(value: User[]) { this.privateUsers = value }

    @observable private privateTitle = new MaxLengthString('', MAX_TITLE_LENGTH)
    @observable private privateText = new MaxLengthString('', MAX_TEXT_LENGTH)
    @observable private privateChildren: WorkItem[]
    @observable private privateNotes: WorkItem[]
    @observable private privateTags: string[]
    @observable private privateUsers: User[]

    public setTitle (value: string): boolean {
        return this.privateTitle.set(value)
    }

    public setText (value: string): boolean {
        return this.privateText.set(value)
    }

    public pushChild(item: WorkItem) {
        this.children.push(item);
    }

    public pushNote(item: WorkItem) {
        this.notes.push(item);
    }
}

export default WorkItem