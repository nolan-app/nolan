import React from "react";
import Home from "../../pages/Home/Home";
import renderer from "react-test-renderer";

it("renders Home component", () => {
    const tree = renderer.create(<Home width={300} />).toJSON();
    expect(tree).toMatchSnapshot();
});
