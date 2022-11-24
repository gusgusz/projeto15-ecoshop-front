import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { useState } from 'react';
import { createContext } from 'react';

export const authContext = createContext();
export default function App() {
    const [auth, setAuth] = useState(null);
    
    return(
        <BrowserRouter>
        <authContext.Provider value={{auth, setAuth}}>
            <Routes>
                <Route path="/" element={<SignUp/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
               
            </Routes>
            </authContext.Provider>
        </BrowserRouter>
    );
}