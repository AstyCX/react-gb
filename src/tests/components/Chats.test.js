import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store/Duck";
import Chats from "../../pages/containers/Chats";

describe('Chats component test', ()=>{
    it('Returns React Component', () => {
        const rendered = render(<Provider store={store}><Chats /></Provider>)

        expect(rendered).toMatchSnapshot();
    });
})