import React from "react";
import { shallow } from "enzyme";
import Gift from "./Gift";

describe("Gift", () => {
  const gift = shallow(<Gift />);

  it("renders correctly", () => {
    expect(gift).toMatchSnapshot();
  });

  it("initializes a person and present in the `state`", () => {
    expect(gift.state()).toEqual({ person: "", present: "" });
  });

  describe("when typing into the person input", () => {
    const person = "UncleBen";

    beforeEach(() => {
      gift
        .find(".input-person")
        .simulate("change", { target: { value: person } });
    });

    it("it updates the person in `state`", () => {
      expect(gift.state().person).toEqual(person);
    });
  });
});
