import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from './Component/Main/Main';
import ShowInformation from './Component/ShowData/retriveInfo';
import AddPerson from './Component/AddPerson/AddPerson';
import { DataProvider } from "./Component/DataContext";

function App() {
  const routes=createBrowserRouter([
    {
      path:"/",
      element:<Main />,
      children:[
        {
          path:"/",
          element:<AddPerson />,
        },
        {
          path:"/retrieve",
          element:<ShowInformation />,
        }
      ]
    }
  ])
  return (
    <div className="App">
      <DataProvider>
      <RouterProvider router={routes}/>
      </DataProvider>
    </div>
  );
}

export default App;
