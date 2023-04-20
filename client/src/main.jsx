import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Context = createContext(null)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Context.Provider value={{user: new UserStore(), device: new DeviceStore()}}>
          <App />
      </Context.Provider>
  </React.StrictMode>,
)
