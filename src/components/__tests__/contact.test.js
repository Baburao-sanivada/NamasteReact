import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact us Test Cases",()=>{
    test("Contact comp should Render",()=>{
        render(<Contact/>)
        const heading=screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    
    it("Contact comp button should Render",()=>{
        render(<Contact/>)
        const button=screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    })
});