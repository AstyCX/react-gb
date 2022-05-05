import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store/Duck";
import Gists from "../../pages/containers/Gists";

describe('Gists component test', ()=>{
    it('Returns React Component', () => {
        const rendered = render(<Provider store={store}><Gists /> </Provider>)

        expect(rendered).toMatchSnapshot();
    });
})