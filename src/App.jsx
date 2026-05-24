import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./Navigation/MainLayout";
import Ledger from "./pages/Ledger";
import BookingCalender from "./pages/BookingCalender";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="ledger" element={<Ledger />} />
            <Route path="booking-calendar" element={<BookingCalender />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
