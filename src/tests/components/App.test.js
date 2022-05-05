import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import App from "../../App";
import {store} from "../../store/Duck";

describe('Chats component test', ()=>{
  it('Returns React Component', () => {
    const rendered = render(<Provider store={store}><App /></Provider>)

    expect(rendered).toMatchSnapshot();
  });
})