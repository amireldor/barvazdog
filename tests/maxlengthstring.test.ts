import MaxLengthString from '../src/utils/MaxLengthString'

const TEST_MAX_LENGTH = 24
var theString: MaxLengthString = null

beforeEach(() => {
    theString = new MaxLengthString("Jimmy", TEST_MAX_LENGTH)
})

test("throw if setting bad maximum length", () => {
    expect(() => { theString.MAX_LENGTH = 0 }).toThrowError(RangeError)
    expect(() => { theString.MAX_LENGTH = -31 }).toThrowError(RangeError)
})

test("trim initial value if maximum is shorter", () => {
    var anotherString = new MaxLengthString("Amir Eldor", 4)
    expect(anotherString.get()).toHaveLength(4)
})

test("value is set correctly", () => {
    var ok = theString.set("Fish")
    expect(theString.get()).toBe("Fish")
    expect(ok).toBeTruthy()
})

test("value is trimmed after set if exceeds max length", () => {
    var ok = theString.set("A".repeat(TEST_MAX_LENGTH + 100))
    expect(theString.get()).toHaveLength(TEST_MAX_LENGTH)
    expect(ok).toBeFalsy()
})

test("set new max length", () => {
    const newLength = TEST_MAX_LENGTH + 13
    theString.MAX_LENGTH = newLength
    expect(theString.MAX_LENGTH).toBe(newLength)
})

test("new max length trims longer text", () => {
    const newLength = theString.get().length - 1
    const oldValue = theString.get()
    theString.MAX_LENGTH = newLength
    expect(theString.get()).toHaveLength(newLength)
    expect(theString.get()).toBe(oldValue.substr(0, newLength))
})