import User from './User'
import MaxLengthString from '../utils/MaxLengthString'

export const MAX_TITLE_LENGTH: number = 100
export const MAX_TEXT_LENGTH: number = 1000

class WorkItem {
    private privateTitle = new MaxLengthString('', MAX_TITLE_LENGTH)
    private privateText = new MaxLengthString('', MAX_TEXT_LENGTH)
    private privateChildren: WorkItem[]
    private privateNotes: WorkItem[]
    private privateTags: string[]
    private privateUsers: User[]

    get title() { return this.privateTitle.get() }
    get text() { return this.privateText.get() }
    get children() { return this.privateChildren }
    get notes() { return this.privateNotes }
    get tags() { return this.privateTags }

    set title(value: string) { this.privateTitle.set(value) }
    set text(value: string) { this.privateText.set(value) }

    public setTitle (value: string): boolean {
        return this.privateTitle.set(value)
    }

    public setText (value: string): boolean {
        return this.privateText.set(value)
    }
}

export default WorkItem