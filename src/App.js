import './App.css';
import {Header} from './Body/Component/Header';
import {MenuLeft} from './Body/Component/Leftmenu';
import {SectionOne} from './Body/SectionOne';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AlbumDetail} from "./Body/Component/AlbumDetail";
import {PhotoDetail} from "./Body/Component/PhotoDetail";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <MenuLeft/>
        <Routes>
          <Route path='/user' element={<SectionOne/>} />
          <Route path='/user/album/:id' element={<AlbumDetail/>} />
          <Route path='/user/photos/:id' element={<PhotoDetail/>} />
        </Routes>

    </BrowserRouter>
  )
  
}




export default App;
