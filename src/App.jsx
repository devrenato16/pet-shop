import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/HomePage";
import ClientPage from "./views/ClientPage";
import StorePage from "./views/StorePage";

export default function App() {
  return (
    <>
      <MantineProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/client" element={<ClientPage />} />
            <Route path="/store" element={<StorePage />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </>
  );
}
