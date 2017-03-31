import WorkItem, { MAX_TITLE_LENGTH } from '../src/models/WorkItem'

test("should set the title and return true", () => {
    const value = "A"
    var item = new WorkItem()

    var ok = item.setTitle(value)
    expect(ok).toBeTruthy()
    expect(item.title).toBe(value)
})

test("should trim the title length and return false", () => {
    const value = "A".repeat(MAX_TITLE_LENGTH + 100)
    var item = new WorkItem()

    var ok = item.setTitle(value)
    expect(ok).toBeFalsy()
    expect(item.title).toHaveLength(MAX_TITLE_LENGTH)
})