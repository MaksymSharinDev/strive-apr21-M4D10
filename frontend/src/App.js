
import SpotySidebar from './components/SpotySidebar/SpotySidebar.jsx'
import SpotyPlayer from './components/SpotyPlayer/SpotyPlayer.jsx'
import './App.css'
import 'semantic-ui-css/semantic.min.css'

function App() {
    return (
        <div className="App">
            <SpotySidebar/>
            <SpotyPlayer />
        </div>
    );
}

export default App;
