import CheckList from "../checkListObject";
import { format } from 'date-fns';

describe("Test To Do object creation", () => {
    const testcheck = CheckList(1, "Test", "Description", "2021-03-20")

    test("Expect testcheck to be an Object", () => {
        expect(typeof testcheck === "object").toBe(true)
    })
    test("id attribute exists", () => {
        expect(!testcheck.id).toBe(false)
    })
    test("title attribute exists", () => {
        expect(!testcheck.title).toBe(false)
    })
    test("description attribute exists", () => {
        expect(!testcheck.description).toBe(false)
    })
    test("dueDate attribute exists", () => {
        expect(!testcheck.dueDate).toBe(false)
    })
    test("dueDate to be instance of Date", () => {
        expect(typeof testcheck.dueDate === "string").toBe(true)
    })
    test("startDate attribute exists", () => {
        expect(!testcheck.startDate).toBe(false)
    })
    test("startDate to be instance of Date", () => {
        expect(testcheck.startDate).toBe(format(new Date(), 'yyyy-MM-dd'))
    })
    test("notes attribute exists", () => {
        expect(testcheck.notes).toBe("")
    })
    test("checkList attribute exists", () => {
        expect(!testcheck.checkList).toBe(false)
    })
    test("CheckList to be instance of Array", () => {
        expect(testcheck.checkList instanceof Array).toBe(true)
    })
})