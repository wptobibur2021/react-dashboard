import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar } from "./components";
import { useStateContext } from "./context/ContextProvider";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  ColorPicker,
  Editor,
} from "./pages";
import "./App.css";
const App = () => {
  const { activeMenu } = useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Setting" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl rounded-full hover:bg-light-gray text-white"
                style={{ background: "blue" }}
              >
                <FiSettings></FiSettings>
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Ecommerce />}></Route>
              <Route path="/ecommerce" element={<Ecommerce />}></Route>
              {/* Pages */}
              <Route path="/orders" element={<Orders />}></Route>
              <Route path="/employees" element={<Employees />}></Route>
              <Route path="/customers" element={<Customers />}></Route>

              {/* Apps */}
              <Route path="/kanban" element={<Kanban />}></Route>
              <Route path="/calendar" element={<Calendar />}></Route>
              <Route path="/editor" element={<Editor />}></Route>
              <Route path="/colorPicker" element={<ColorPicker />}></Route>
              {/* Chart */}
              <Route path="/pie" element={<Pie />}></Route>
              <Route path="/financial" element={<Financial />}></Route>
              <Route path="/bar" element={<Bar />}></Route>
              <Route path="/area" element={<Area />}></Route>
              <Route path="/stacked" element={<Stacked />}></Route>
              <Route path="/pyramid" element={<Pyramid />}></Route>
              <Route path="/colorMapping" element={<ColorMapping />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
