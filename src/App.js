import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import {
  ToastContainer
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {

  return (

    <>

      <AppRoutes />

      <ToastContainer
  position="top-center"
  autoClose={1000}
  hideProgressBar={true}
  newestOnTop
  closeOnClick 
  draggable
  theme="dark"
  toastClassName="custom-toast"
  bodyClassName="custom-toast-body"
/>

    </>

  );

}

export default App;