import Counter from "./Props&StateManagement/counter/counter";
import Calculator from "./Props&StateManagement/Calculator/calculator";
import UserProfile from "./Props&StateManagement/UserProfile/UserProfile";
import MessageCard from "./Props&StateManagement/MessageCard/MessageCard";
import FirstComponent from "./FirstComponent";
import SideEffect from "./assignments/HandlingSideEffectsWithUseEffect/SideEffect";
import StatusToggle from "./assignments/StylingInReact/StatusToogle/StatusToggle";

function App() {
  return(
    <div>
    <FirstComponent />

    <Counter />
    <Calculator />

    <MessageCard title="Card 1" message="Hello React" />
    <MessageCard title="Card 2" message="Reusable Component" />

    <UserProfile />
    <SideEffect />
    <StatusToggle />
    </div>
   )
}

export default App;
