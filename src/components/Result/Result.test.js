import React from "react";
import { shallow } from "enzyme";
import Result from "./Result";

it("should display result", () => {
    var testProps = {
        value: 21
    };

    const component = shallow(<Result {...testProps} />);
    const pTag = component.find("#value");

    expect(pTag.text()).toBe("21");
});
