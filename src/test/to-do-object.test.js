import ToDo from "../to-do-object";
import { format } from 'date-fns';

describe("Test To Do object creation", () => {
    const testToDo = ToDo(1, "Test", "Description", "2021-03-20")

    test("Expect testToDo to be an Object", () => {
        expect(typeof testToDo === "object").toBe(true)
    })
    test("id attribute exists", () => {
        expect(!testToDo.id).toBe(false)
    })
    test("title attribute exists", () => {
        expect(!testToDo.title).toBe(false)
    })
    test("description attribute exists", () => {
        expect(!testToDo.description).toBe(false)
    })
    test("dueDate attribute exists", () => {
        expect(!testToDo.dueDate).toBe(false)
    })
    test("dueDate to be instance of Date", () => {
        expect(typeof testToDo.dueDate === "string").toBe(true)
    })
    test("startDate attribute exists", () => {
        expect(!testToDo.startDate).toBe(false)
    })
    test("startDate to be instance of Date", () => {
        expect(testToDo.startDate).toBe(format(new Date(), 'yyyy-MM-dd'))
    })
    test("notes attribute exists", () => {
        expect(testToDo.notes).toBe("")
    })
    test("checkList attribute exists", () => {
        expect(!testToDo.checkList).toBe(false)
    })
    test("CheckList to be instance of Array", () => {
        expect(testToDo.checkList instanceof Array).toBe(true)
    })
})
