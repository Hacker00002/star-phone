import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Admin from "./Admin/Admin";
import Main from "./Components/main/Main";
import { AuthContextProvider } from "./account/google";
import Register from "./Pages/Regiter";
import Users from "./users/User";
import SignIn from "./Pages/Signin";
import Location from "./Pages/location/Location";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/User" element={<Users />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/Location" element={<Location />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
