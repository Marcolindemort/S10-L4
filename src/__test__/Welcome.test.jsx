import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Is Welcome mounting correctly", () => {
	it("Welcome is mounting correctly", () => {
		render(<Welcome />);

		const exists = screen.getByText("Benvenuti in EpiBooks!");

		expect(exists).toBeInTheDocument();
	});
});
