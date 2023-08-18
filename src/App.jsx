import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import Home from "./pages/Home";
import Flowers from "./pages/Flowers";
import Plants from "./pages/Plants";
import Single from "./pages/Single"
import Single1 from "./pages/Single1";
import Single2 from "./pages/Single2";
import Repairing from "./pages/Repairing";
import Notfound from "./pages/Notfound";


import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <section>
            <div className="max-w-[1160px] mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/flowers" element={<Flowers />} />
                <Route path="/plants" element={<Plants />} />
                <Route path="/gift" element={<Repairing />} />
                <Route path="/discount" element={<Repairing />} />
                <Route path="/about" element={<Repairing />} />
                <Route path="/flowers/:id" element={<Single />} />
                <Route path="/flowers/flowers/:id" element={<Single1 />} />
                <Route path="/plants/flowers/:id" element={<Single2 />} />
                <Route path="*" element={<Notfound />} />
              </Routes>
            </div>
          </section>
        </main>
        <Footer />
        <Modal />
      </BrowserRouter>
    </>
  );
};

export default App;
