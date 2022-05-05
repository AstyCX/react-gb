import {render} from "@testing-library/react";
import ControlPanel from "../../components/presentations/ControlPanel";

describe('ControlPanel component test', ()=>{
    it('Returns React Component', () => {
        const rendered = render(<ControlPanel />)

        expect(rendered).toMatchSnapshot();
    });
})