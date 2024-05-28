import { render, screen } from "@testing-library/react"

import Navbar from "./index"

test("navbar renders correctly", () => {
    render(<Navbar />)
    expect(screen.getByText("Menu")).toBeInTheDocument()
})