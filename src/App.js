import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import AppStyle from './styleApp/App.module.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MyProfileContainer from "./components/Profile/MyProfile/MyProfileContainer";






const App = () => {

    return (
        <BrowserRouter>
            <div className={AppStyle.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={AppStyle.appWrapperContet}>
                    <Routes>
                        <Route path={'/profile/:userId'} element={ <MyProfileContainer/> } />
                        <Route path={'/profile/*'} element={ <MyProfileContainer/> } />
                        <Route path={'/dialogs/*'} element={ <DialogsContainer/> } />
                        <Route path={'/users/*'} element={ <UsersContainer/> } />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
