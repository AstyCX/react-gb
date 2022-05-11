import {render} from "@testing-library/react";
import NavPages from "../../components/containers/NavPages";
import App from "../../App";
import {store} from "../../store/Duck";
import {Provider} from "react-redux";

describe('NavPages component test', ()=>{
    it('Returns React Component', () => {
        const rendered = render(<Provider store={store}><App pages={
            {
                Home: {
                    id: '',
                    link: '/'
                }, Profile: {
                    id: 'profile',
                    link: '/profile'
                }, Chats: {
                    id: 'chats',
                    link: '/chats'
                }, Gists: {
                    id: 'gists',
                    link: '/gists'
                }, Login: {
                    id: 'login',
                    link: '/login'
                }, Registration: {
                    id: 'registration',
                    link: '/registration'
                }
            }}><NavPages /></App></Provider>)

        expect(rendered).toMatchSnapshot();
    });
})