import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from "./models"
import "./style.css"
import { Suspense, lazy } from "react"
import { LoadingPage } from "./pages/LoadingPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import RoutesWithNotFound from "./utilities/RoutesWithNotFound";
import { Private } from "./pages/Private";
import { AuthGuard } from "./guard";

const Login = lazy(() => import("./auth/pages/Login/Login"));
const Register = lazy(() => import("./auth/pages/Register/Register"))

const darkMode = JSON.parse(localStorage.getItem("darkMode") as string)
darkMode ? document.body.classList.add("dark") : document.body.classList.remove("dark")

function App() {

  return (
    <div>
      <Suspense fallback={<LoadingPage />}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
              <Route path={PublicRoutes.REGISTER} element={<Register />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard />} >
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App