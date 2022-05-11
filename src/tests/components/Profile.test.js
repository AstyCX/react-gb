import {render} from "@testing-library/react";
import Profile from "../../pages/containers/Profile";
import {Provider} from "react-redux";
import {store} from "../../store/Duck";

describe('Profile component test', ()=>{
    it('Returns React Component', () => {
        const rendered = render(<Provider store={store}><Profile /></Provider>)

        expect(rendered).toMatchSnapshot();
    });
})