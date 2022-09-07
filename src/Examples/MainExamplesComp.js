// import CkEditorExampleComponent from './CkEditorExampleComponent'
// import Htmltotext from './Htmltotext'
// import IndianStateRegionSelectDropdown from './CountryRegionSelectorDropdown'
// import PasswordToggle from './PasswordToggle'
// import Spinners from './Spinners'
// import ModalComp from './ModalComp'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import UserFormPassDataInRouterLink from "./UserFormPassDataInRouterLink";
// import DataPassThroughProps from "./DataPassThroughProps";
// import HighChartsApp from "./HighChartsApp";
// import HighChartOfficial from "./HighChartOfficial";
// import PassFuncToChildComp from "./PassFuncToChildComp";
// import HOCMain from "./HOCMain";
// import HOCCounter from "./HOCCounter";

// import PureCompApp from "./PureCompApp";

export default function MainExamplesComp() {
  return (
    <div className='container w-50 mt-5'>

        {/* <CkEditorExampleComponent /> */}
        {/* <Htmltotext /> */}
        {/* <IndianStateRegionSelectDropdown /> */}
        {/* <PasswordToggle /> */}
        {/* <Spinners /> */}
        {/* <ModalComp /> */}

        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<UserFormPassDataInRouterLink /> } />
            <Route path="/details" exact element={<Details /> } />
        </Routes>
      </BrowserRouter>

        {/* <DataPassThroughProps data={{name:"Amit", age:25}} /> */}

        {/* <HighChartsApp /> */}

        {/* <HighChartOfficial/> */}

        {/* <PassFuncToChildComp /> */}
        
        {/* <HOCMain/> */}
        {/* <HOCCounter/> */}
        {/* <PureCompApp/> */}
    </div>
  )
}
