import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"

import store from "../store/index"

import Home from "./Home"

test("Home component", () => {
    render(<Provider store={store}><Home /> </Provider>)
    expect(screen.getByText("Musa eCommerce")).toBeInTheDocument()
})