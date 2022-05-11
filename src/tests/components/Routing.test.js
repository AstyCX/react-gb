import {render} from "@testing-library/react";
import Routing from "../../components/containers/Routing";
import {Provider} from "react-redux";
import {store} from "../../store/Duck";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "../../hooks/AuthProvider";

describe('Routing component test', ()=>{
    it('Returns React Component', () => {
        const rendered = render(<BrowserRouter><Provider store={store}><AuthProvider><Routing /></AuthProvider></Provider></BrowserRouter>)

        expect(rendered).toMatchSnapshot();
    });
})