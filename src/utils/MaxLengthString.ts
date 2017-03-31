class MaxLengthString {
    private _value: string = ''
    private _MAX_LENGTH: number = null

    constructor(value: string, max: number) {
        this.MAX_LENGTH = max
        this.set(value)
    }

    get(): string {
        return this._value
    }

    set(value: string): boolean {
        this._value = value.slice(0, this.MAX_LENGTH)
        return value.length < this.MAX_LENGTH
    }

    get MAX_LENGTH() {
        return this._MAX_LENGTH
    }

    set MAX_LENGTH(max: number) {
        if (max <= 0) {
            throw RangeError("Maximum length must be positive")
        }
        this._MAX_LENGTH = max
        this.set(this.get())
    }
}

export default MaxLengthString