import Main from "./Layouts/Main";
import Topbar from "./Layouts/Topbar"
import "bootstrap/dist/css/bootstrap.min.css"

function App(props) {

  return (
    <div className="position-relative">
      <Topbar />
      <Main />
    </div>
  );
}

export default App;