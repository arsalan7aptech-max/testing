import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip";
import DashboardLayout from "./layout/DashboardLayout";

// Lazy Loaded Pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Home = lazy(() => import("./pages/Home"));
const Eror404 = lazy(() => import("./pages/Eror404"));
const Contact = lazy(() => import("./pages/Contact"));
const Product = lazy(() => import("./pages/Product"));
const Orders = lazy(() => import("./pages/Order"));
const AddProduct = lazy(() => import("./pages/AddProduct"));
const Counter = lazy(() => import("./pages/Counter"));
const Form = lazy(() => import("./pages/Form"));
const ProductList = lazy(() => import("./pages/ProductList"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const LoginForm = lazy(() =>
  import("./pages/Login").then((module) => ({
    default: module.LoginForm,
  }))
);
const Register = lazy(() =>
  import("./pages/Register").then((module) => ({
    default: module.Register,
  }))
);

function App() {
  return (
    <TooltipProvider>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Product" element={<Product />} />
            <Route path="Orders" element={<Orders />} />
            <Route path="AddProduct" element={<AddProduct />} />
            <Route path="Counter" element={<Counter />} />
            <Route path="Form" element={<Form />} />
            <Route path="ProductList" element={<ProductList />} />
            <Route path="ProductDetail/:id" element={<ProductDetail />} />
            <Route path="Login" element={<LoginForm />} />
            <Route path="Register" element={<Register />} />
          </Route>

          <Route path="*" element={<Eror404 />} />
        </Routes>
      </Suspense>
    </TooltipProvider>
  );
}

export default App;