export default class User {
    private _name: string
    constructor(newName = "anonymous") {
        this.name = newName
    }

    get name(): string {
        return this._name
    }

    set name(newName: string) {
        this._name = newName
    }

}
