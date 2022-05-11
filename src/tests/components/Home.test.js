import {render} from "@testing-library/react";
import Home from "../../pages/presentations/Home";

describe('Home component test', ()=>{
    it('Returns React Component', () => {
        const rendered = render(<Home />)

        expect(rendered).toMatchSnapshot();
    });
})