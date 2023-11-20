    import ReactDOM from 'react-dom/client'
    import {Provider} from "react-redux";
    import store from "./Redux/store.js";
    import {BrowserRouter,  Route, Routes} from "react-router-dom";
    import Login from "./pages/Login.jsx";
    import Registration from "./pages/Registration.jsx";
    import CombineComponents from "./Components/CombineComponents/CombineComponents.jsx";
    import Header from "./Components/Header/Header.jsx";
    import './main.scss'
    import Active from "./Components/CombineComponents/Center/Tasks/Task/ActiveTask/Active.jsx";
    import FinishedTasks from "./Components/CombineComponents/Center/Tasks/Task/FinishedTask/FinishedTasks.jsx";
    import AllTasks from "./Components/CombineComponents/Center/Tasks/Task/AllTask/AllTasks.jsx";
    import Footer from "./Components/Footer/Footer.jsx";
    import PageNotFound from "./pages/PageNotFound.jsx";


    ReactDOM.createRoot(document.getElementById('root')).render(
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/registration' element={<Registration />} />
                    <Route path='/page' element={<><Header /><CombineComponents /></>} />
                    <Route path='/page' element={<><Header /><CombineComponents /> <Footer/></>}>
                        <Route index element={<AllTasks />} />
                        <Route path='active' element={<Active />} />
                        <Route path='finished' element={<FinishedTasks />} />
                    </Route>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
