import Project from "../project"

describe("Test Project object creation", () => {
    const testP = Project(1, "Test", "Description")

    test("Expect testP to be an Object", () => {
        expect(typeof testP === "object").toBe(true)
    })

    test("id attribute exists", () => {
        expect(!testP.id).toBe(false)
    })
    test("title attribute exists", () => {
        expect(!testP.title).toBe(false)
    })
    test("description attribute exists", () => {
        expect(!testP.description).toBe(false)
    })
    test("todo attribute exists", () => {
        expect(!testP.toDo).toBe(false)
    })
})
