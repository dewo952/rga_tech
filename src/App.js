import { Fade , Slide} from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Aboutpage from "./Pages/Aboutpage";
import Contactpage from "./Pages/Contactpage";
import Homepage from "./Pages/Homepage";
import Privacypolicypage from "./Pages/Privacypolicypage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/privacy-policy" element={<Privacypolicypage />} />
      </Routes>
      <Slide  bottom>
        <Footer />
      </Slide>
    </>
  );
}

export default App;
