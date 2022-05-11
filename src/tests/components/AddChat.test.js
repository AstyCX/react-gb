import AddChat from "../../components/containers/AddChat";
import {render} from '@testing-library/react';
import {store} from "../../store/Duck";
import {Provider} from "react-redux";

describe('AddChat component test', ()=>{
    it('Returns React Component', () => {
        const rendered = render(<Provider store={store}><AddChat /> </Provider>)

        expect(rendered).toMatchSnapshot();
    });
})