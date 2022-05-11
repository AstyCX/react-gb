import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store/Duck";
import ChatList from "../../components/containers/ChatList";

describe('ChatList component test', ()=>{
    it('Returns React Component', () => {
        const rendered = render(<Provider store={store}><ChatList /> </Provider>)

        expect(rendered).toMatchSnapshot();
    });
})