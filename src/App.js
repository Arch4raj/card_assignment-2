import { useState } from "react";
import './App.css';

function App(){
  
  return(
<Counter />
  );


}
export default App;
function Counter(){
  const [like,setLike]=useState(0);
  return(
<div>
  <button onClick={()=>setLike(like+1)}>👍{like}</button>
  {/* <p>{like}</p> */}
</div>

  );
}