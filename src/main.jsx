import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Page from './Home/categoryPage/categoryPage.jsx'
import Page2 from './Home/page2/page2.jsx'
import Page3 from './Home/page3/page3.jsx'
import Page4 from './Home/page4/page4.jsx'
import Search from './components/Input/Input.jsx'
import './index.css'
import store from "./app/store.js";

import page2 from "./Home/page2/page2.jsx";
import {Provider} from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
  {
    path: "/infoPage",
    element: <Page2 />,
  },
  {
    path: "/page2/:category",
    element: <Page2/>,
  },
  {
    path: "/previewPage",
    element: <Page3 />,
  },
  {
    path: "/accountPage",
    element: <Page4 />,
  },
  {
    path: "/searchPage",
    element: <Search />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
)
