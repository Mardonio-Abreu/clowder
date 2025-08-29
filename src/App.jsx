import catLogo from './assets/landingcat-icon-cat.png'
import './components/NavBar.jsx'
import './css/App.css'
import NavBar from "./components/NavBar.jsx";

function App() {
    return (
        <>
            <NavBar/>
            <div>
                <img src={catLogo} className="logo" alt="cat logo"/>
            </div>
            <p>
                Cats electronic care files
            </p>
        </>
    )
}

export default App
