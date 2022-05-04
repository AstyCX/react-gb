import './App.css';
import Routing from "./components/containers/Routing";
import {BrowserRouter} from "react-router-dom";
import NavPages from "./components/containers/NavPages";
import {AuthProvider} from "./hooks/AuthProvider";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <h1>My Messenger</h1>
                    <NavPages pages={
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
                        }
                    }/>
                </header>
                <main className='App-main'>
                    <AuthProvider >
                        <Routing />
                    </AuthProvider>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
