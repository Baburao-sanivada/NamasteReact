import { render,screen } from "@testing-library/react"
import Card, { CardWithLabel } from "../Card"
import Mock_data from "../Mocks/resCardMock.json";
import "@testing-library/jest-dom"

it("Should Render Card in the Body",()=>{

    render(<Card data={Mock_data}/>)

    const ResName=screen.getByText("Pista House Restaurant & Bakery");

    expect(ResName).toBeInTheDocument();

})

it("Should Render With card Promoted Label  in the Body Higher Order Components",()=>{

    const WithLabel=CardWithLabel(Card);
    render(
        <WithLabel data={Mock_data}/>
    )

    const ResName=screen.getByText("Pista House Restaurant & Bakery");

    expect(ResName).toBeInTheDocument();

})