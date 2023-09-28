import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import Mock_Data from "../Mocks/MockResMenu.json"
import { Provider } from "react-redux"
import AppStore from "../../utils/Store/AppStore"
import "@testing-library/jest-dom"
import Header from "../Header"
import Cart from "../Cart"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>
            Promise.resolve(Mock_Data)
    })
})


it("Should Render Menu",async ()=>{
    await act(async ()=>{
        render(<Provider store={AppStore}>
            <BrowserRouter>
            <Header/>
            </BrowserRouter>
            <RestaurantMenu/>
            <Cart></Cart>
            </Provider>)
    })

    const AccordionHeader=screen.getByText("Recommended (14)")
    
    fireEvent.click(AccordionHeader)

    const fooditems=screen.getAllByTestId("fooditems");

    expect(fooditems.length).toBe(14);

    const btnItems=screen.getAllByRole("button",{name:"- Add +"})

    fireEvent.click(btnItems[0]);

    fireEvent.click(btnItems[1]);

    expect(screen.getByText("Cart- (2items)")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Cart- (2items)"))

    const cartItems=screen.getAllByTestId("fooditems");

    expect(cartItems.length).toBe(16);

    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}))

    const cartItemsNew=screen.getAllByTestId("fooditems");

    expect(cartItemsNew.length).toBe(14);

    expect(screen.getByText("Cart is Empty Please Add Items!!!")).toBeInTheDocument();
})

