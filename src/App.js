import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import MyProfile from './components/Profile/MyProfile/MyProfile'
import AppStyle from './styleApp/App.module.css'

const App = () => {
    return (
        <div className={AppStyle.appWrapper}>
            <Header/>
            <Navbar/>
            <MyProfile/>
        </div>
    )
}

export default App;
