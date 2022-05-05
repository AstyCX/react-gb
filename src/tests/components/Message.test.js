import {render} from "@testing-library/react";
import Message from "../../components/presentations/Message";

describe('Message component test', ()=>{
    it('Returns React Component', () => {
        const rendered = render(<Message props={{text: 'Mytext', author: 'MyAuthor'}}/>)

        expect(rendered).toMatchSnapshot();
    });
})