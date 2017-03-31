import User from './User'

export const MAX_TITLE_LENGTH: number = 100

class WorkItem {
    private privateTitle: string = ''
    private privateText: string = ''
    private privateChildren: WorkItem[]
    private privateNotes: WorkItem[]
    private privateTags: string[]
    private privateUsers: User[]

    get title() { return this.privateTitle }
    get text() { return this.privateText }
    get children() { return this.privateChildren }
    get notes() { return this.privateNotes }
    get tags() { return this.privateTags }

    public setTitle(value: string): boolean {
        this.privateTitle = value.slice(0, MAX_TITLE_LENGTH)
        return value.length < MAX_TITLE_LENGTH
    }
}

export default WorkItem