import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import MyProfile from './components/Profile/MyProfile/MyProfile'
import AppStyle from './styleApp/App.module.css'
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div className={AppStyle.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={AppStyle.appWrapperContet}>
                    <Routes>
                        <Route path={'/profile/*'} element={<MyProfile/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
