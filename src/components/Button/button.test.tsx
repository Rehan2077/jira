import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button Tests", () => {
  test("Should render button", () => {
    render(<Button onClick={() => console.log()}>Click Me</Button>);

    const element = screen.getByTestId("button-test");
    expect(element).toBeTruthy();
  });
});
