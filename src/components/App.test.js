import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { isMainThread } from "worker_threads";

const app = shallow(<App />);

it("renders correctly", () => {
  expect(app).toMatchSnapshot();
});
