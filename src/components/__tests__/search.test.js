import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../Mocks/BodyResListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Search functionality working Properly",async ()=>{
    await act(async ()=> 
        render(
            <BrowserRouter><Body/></BrowserRouter>
        ))

    const cardsBefore=screen.getAllByTestId("card");

    expect(cardsBefore.length).toBe(6);

    const searchbtn=screen.getByRole("button",{name:"Search"});

    const searchInput=screen.getByTestId("searchelement");

    fireEvent.change(searchInput,{target:{value:"pista"}});

    fireEvent.click(searchbtn)

    const cardsAfter=screen.getAllByTestId("card");

    expect(cardsAfter.length).toBe(1);
})