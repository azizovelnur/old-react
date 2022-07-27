import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import MyProfile from './components/Profile/MyProfile/MyProfile'
import AppStyle from './styleApp/App.module.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";






const App = (props) => {

    return (
        <BrowserRouter>
            <div className={AppStyle.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={AppStyle.appWrapperContet}>
                    <Routes>
                        <Route path={'/profile/*'} element={ <MyProfile store={props.store} /> } />
                        <Route path={'/dialogs/*'} element={ <DialogsContainer store={props.store}/> } />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
