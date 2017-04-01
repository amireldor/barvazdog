import WorkItem from '../src/models/WorkItem'

var workItem: WorkItem = null

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

describe("working with children", () => {
    test("pushing children", () => {
        workItem.pushChild(new WorkItem("First child"))
        expect(workItem.children).toHaveLength(1)

        workItem.pushChild(new WorkItem("Second child"))
        workItem.pushChild(new WorkItem("Third child"))
        expect(workItem.children).toHaveLength(3)
    })

    test("pushing notes", () => {
        workItem.pushNote(new WorkItem("First note"))
        expect(workItem.notes).toHaveLength(1)

        workItem.pushNote(new WorkItem("Second note"))
        workItem.pushNote(new WorkItem("Third note"))
        expect(workItem.notes).toHaveLength(3)
    })
})