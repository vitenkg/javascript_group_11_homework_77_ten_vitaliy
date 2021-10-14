import {Route, Switch} from "react-router-dom";
import NewMessage from "./containers/NewMessages/NewMessage";
import Messages from "./containers/Messages/Messages";

const App = () => (
    <>
        <Switch>
            <Route path="/" exact component={Messages}/>
            <Route path="/message/new" component={NewMessage}/>
        </Switch>
    </>
);

export default App;