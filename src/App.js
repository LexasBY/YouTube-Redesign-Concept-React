import Header from "./components/header/Header";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";
import "./styles/Layout.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="page-content">
        <div className="main-content">
          <MainContent />
        </div>

        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
