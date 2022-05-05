import './App.css';
import Routing from "./components/containers/Routing";
import {BrowserRouter} from "react-router-dom";
import NavPages from "./components/containers/NavPages";

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
                            }
                        }
                    }/>
                </header>
                <main className='App-main'>
                    <Routing/>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
