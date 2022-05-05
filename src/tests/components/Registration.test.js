import {render} from "@testing-library/react";
import Registration from "../../pages/containers/Registration";

describe('Registration component test', ()=>{
    it('Returns React Component', () => {
        const rendered = render(<Registration />)

        expect(rendered).toMatchSnapshot();
    });
})