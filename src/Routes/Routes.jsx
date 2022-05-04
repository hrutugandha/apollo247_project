import { Route, Routes } from "react-router-dom";
import Pharmacy from "../components/Pharmacy/Pharmacy";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/pharmacy" element={<Pharmacy />} />
      </Routes>
    </>
  );
};
