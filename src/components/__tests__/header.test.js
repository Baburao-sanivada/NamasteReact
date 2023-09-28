import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import AppStore from "../../utils/Store/AppStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


test("Should render login Button in Header",()=>{
    
        render(
            <BrowserRouter>
                <Provider store={AppStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        )
        const loginbutton=screen.getByRole("button");

        expect(loginbutton).toBeInTheDocument();
    
})

test("Should render Cart 0 items in Header",()=>{
    
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const cartitems=screen.getByText("Cart- (0items)");

    expect(cartitems).toBeInTheDocument();

})

//Checking using Regex
test("Should render Cart in Header",()=>{
    
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const cartitems=screen.getByText(/Cart/);

    expect(cartitems).toBeInTheDocument();

})


test("Should Change to logout when click on login in Header",()=>{
    
    render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const loginItem=screen.getByText("Login");

    fireEvent.click(loginItem);

    const logOutItem=screen.getByText("Logout");

    expect(logOutItem).toBeInTheDocument();

})