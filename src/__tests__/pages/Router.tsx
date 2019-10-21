import React from "react";
import Router from "../../pages/Router";
import renderer from "react-test-renderer";

it("renders Router component", () => {
    const tree = renderer.create(<Router />).toJSON();
    expect(tree).toMatchSnapshot();
});
