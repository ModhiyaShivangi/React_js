import { useRoutes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu.jsx'
import FunctionalComponentInReact from './01FunctionalComponentInReact.jsx';
import StateFunctionalComponentInReact from './02StateFunctionalComponentInReact.jsx';
import PropsFunctionalComponentInReact from './03PropsFunctionalComponentInReact.jsx';
import JSXFunctionalComponentInReact from './05JSXFunctionalComponentInReact.jsx';
import ControlledComponentInReact from './06ControlledComponentInReact.jsx';
import MultipleDataComponentInReact from './07MultipleDataComponentInReact.jsx';
import RestVsSpreadComponentInReact from './08RestVsSpreadComponentInReact.jsx';
import HooksInFunctionalCompo from './09HooksInFunctionalCompo.jsx';
import UseStateinfuncomponent from './10UseStateinfuncomponent.jsx';
import UseEffectHooksInFunctionalCompo from './11UseEffectHooksInFunctionalCompo.jsx';
import UseLayoutEffectHooksInFunctionalCompo from './12UseLayoutEffectHooksInFunctionalCompo.jsx';
import UseRefEffectHooksInFunctionalCompo from './13UseRefEffectHooksInFunctionalCompo.jsx';
import UseCallbackHooksInFunctionalCompo from './14UseCallbackHooksInFunctionalCompo.jsx';
import UseMemoHooksInFunctionalCompo from './15UseMemoHooksInFunctionalCompo.jsx';
import StateLiftingUp from './16StateLiftingUp.jsx';
// import ChildComponent from './17ChildComponent.jsx';
import UseReducerHook from './18UseReducerHook.jsx';
import UseContextHook from './19UseContextHook.jsx';
import ContextAPI from './20ContextAPI.jsx';


const FunctionalCompoRoute = () => {

    const routes = useRoutes([
        {
            path: "/",
            element: <FunctionalCompoMenu/>,
            children: [
                {
                    path: "whatisfunctionalcomponent",
                    element: <FunctionalComponentInReact />,
                }, {
                    path: "stateinfunccomp",
                    element: <StateFunctionalComponentInReact />,
                }, {
                    path: "propsinfunccomp",
                    element: <PropsFunctionalComponentInReact />,
                }, {
                    path: "jsxinfunccomp",
                    element: <JSXFunctionalComponentInReact />,
                }, {
                    path: "ControlledComponentInReact",
                    element: <ControlledComponentInReact />,
                }, {
                    path: "MultipleDataComponentInReact",
                    element: <MultipleDataComponentInReact />,
                }, {
                    path: "restandspread",
                    element: <RestVsSpreadComponentInReact />,
                }, {
                    path: "HooksInFunctionalCompo",
                    element: <HooksInFunctionalCompo />,
                }, {
                    path: "UseStateinfuncomponent",
                    element: <UseStateinfuncomponent />,
                }, {
                    path: "useeffectinfunctionalcompo",
                    element: <UseEffectHooksInFunctionalCompo />,
                }, {
                    path: "uselayouteffectinfunctionalcompo",
                    element: <UseLayoutEffectHooksInFunctionalCompo />,
                }, {
                    path: "UseRefEffectHooksInFunctionalCompo",
                    element: <UseRefEffectHooksInFunctionalCompo />,
                }, {
                    path: "UseCallbackHooksInFunctionalCompo",
                    element: <UseCallbackHooksInFunctionalCompo />,
                },{
                    path: "UseMemoHooksInFunctionalCompo",
                    element: <UseMemoHooksInFunctionalCompo />,
                },{
                    path: "StateLiftingUp",
                    element: <StateLiftingUp />,
                },{
                    path: "UseReducerHook",
                    element: <UseReducerHook />,
                },{
                    path: "UseContextHook",
                    element: <UseContextHook />,
                },{
                    path: "ContextAPI",
                    element: <ContextAPI />,
                }
            ]
        }])
        return routes;
}

export default FunctionalCompoRoute;