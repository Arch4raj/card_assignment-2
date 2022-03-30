
import Countercomponent  from './CounterComponent';
function AppComponent(props){
    var a=5;
return(
    <>
    <h5>hello world {props.ComponentName}</h5>
    <Countercomponent ComponentName={"class component"} initialvalue={5} />
    </>
)
}
export default AppComponent;