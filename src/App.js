
import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom';
import { Home, Login, Public, Personnal, Album } from "./containers/public";
import path from "./ultites/path";
import { useEffect } from "react";
import {useDispatch} from 'react-redux'
import { getHome } from "./store/actions/home";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getHome())
  },[])
  return (
     <> 
       <div className="App">
       <Routes>
          <Route path={path.PUBLIC} element={<Public/>}>
              <Route path={path.HOME} element={<Home/>}/>
              <Route path={path.LOGIN} element={<Login/>}/>
              <Route path={path.PERSONAL} element={<Personnal/>}/>
              <Route path={path.ALBUM_TITLE_PID} element={<Album/>}/>
              <Route path={path.PLAYLIST_TITLE_PID} element={<Album/>}/>
              {/* <Route path={path.AUDIO_TITLE_PID} element={<Album/>}/> */}

              <Route path={path.STAR} element={<Home/>}/>
          </Route>
       </Routes>
    </div>
     <ToastContainer
     position="top-right"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
   />
     </>
  );
}

export default App;
