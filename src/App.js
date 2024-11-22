import Header from "./components/header/Header";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";
import BottomMenu from "./components/BottomMenu/BottomMenu";
import "./styles/Layout.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="page-content">
        <MainContent />

        <Sidebar />
        <BottomMenu />
      </div>
    </div>
  );
}

export default App;
