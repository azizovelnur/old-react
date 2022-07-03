import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import MyProfile from './components/Profile/MyProfile/MyProfile'
import AppStyle from './styleApp/App.module.css'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';






const App = (props) => {

    return (
        <BrowserRouter>
            <div className={AppStyle.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={AppStyle.appWrapperContet}>
                    <Routes>
                        <Route path={'/profile/*'} element={ <MyProfile profilePage={props.state.profilePage} dispatch={props.dispatch} /> } />
                        <Route path={'/dialogs/*'} element={ <Dialogs state={props.state.messagesPage}/> } />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
