import Checkbox from "../Components/Checkbox"
import {fireEvent, render, screen} from "@testing-library/react"

it("render checkbox", () => {
    const {queryByTitle} = render(<Checkbox title="checkbox"/>)
    const checkbox = queryByTitle("checkbox")
    expect(checkbox).toBeTruthy()
})

describe("onChange checkbox", ()=>{
    it("onChange", ()=>{
        const {queryByTitle} = render(<Checkbox title="checkbox"/>)
        const checkbox = queryByTitle("checkbox")
        expect(checkbox.checked).toEqual(false)
        fireEvent.click(checkbox)
        expect(checkbox.checked).toEqual(true)
    })
})