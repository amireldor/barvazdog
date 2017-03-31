import WorkItem from '../src/models/WorkItem'

var workItem = null

const sillyText = "Gizmo is the bizmo"

beforeEach(() => {
    workItem = new WorkItem()
})

describe("handling title property", () => {
    test("title can be set with setter", () => {
        workItem.title = sillyText
        expect(workItem.title).toBe(sillyText)
    })

    test("title can be set with a set function", () => {
        expect(workItem.setTitle(sillyText)).toBeTruthy()
        expect(workItem.title).toBe(sillyText)
    })
})

describe("handling text property", () => {
    test("text can be set with setter", () => {
        workItem.text = sillyText
        expect(workItem.text).toBe(sillyText)
    })

    test("text can be set with a set function", () => {
        expect(workItem.setText(sillyText)).toBeTruthy()
        expect(workItem.text).toBe(sillyText)
    })
})