import { useState } from "react";
import DeviceCard from "./Components/DeviceCard";
import Main from "./Layouts/Main";
import Topbar from "./Layouts/Topbar"
import Popup from "./Layouts/Popup";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [isVisible, setIsVisible] = useState(false)

  const togglePopup = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div>
      <Topbar />
      <Main>
        <DeviceCard onClick={togglePopup}/>
      </Main>
      {isVisible ? <Popup onClick={togglePopup}/> : null}
    </div>
  );
}

export default App;