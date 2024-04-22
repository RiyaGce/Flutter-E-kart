import "./App.css";
import Accordian from "./components/accordian";
import ModalTest from "./components/custom-modal-popup/modal";
import TabTest from "./components/custom-tabs/tab-test";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import StarRating from "./components/star-rating";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import TicTacToe from "./components/tic-tact-toe";
function App() {
  return (
    <div className="App">
       <Accordian/> 
       <ModalTest/>
       <TabTest/>
       <StarRating/>
       <LightDarkMode/>
       <LoadMoreData/>
       <TicTacToe/>
       <QRCodeGenerator/>
       <RandomColor/>
    </div>
  );
}

export default App;
