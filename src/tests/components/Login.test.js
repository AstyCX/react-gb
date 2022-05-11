import {render} from "@testing-library/react";
import Login from "../../pages/containers/Login";
import {BrowserRouter} from "react-router-dom";

describe('Login component test', ()=>{
    it('Returns React Component', () => {
        const rendered = render(<BrowserRouter ><Login /> </BrowserRouter>)

        expect(rendered).toMatchSnapshot();
    });
})