import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import MyProfile from './components/Profile/MyProfile/MyProfile'
import AppStyle from './styleApp/App.module.css'
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className={AppStyle.appWrapper}>
            <Header/>
            <Navbar/>
            <div className={AppStyle.appWrapperContet}>
                <MyProfile/>
                {/*<Dialogs/>*/}
            </div>
        </div>
    )
}

export default App;
