import React from 'react';
class Controlledforms extends React.Component{
    constructor(){
       super();
       this.state={
           firstname: '',
           lastname: '',
           email :'',
           gender : '',
           courses :''
       }
    }
    render(){
        return(
            <form >
                <h2 >user forms</h2>
                <label>firstname:</label>
                <input type="text" name="firstname" value={e.target.value}/><br/><br/>
                <label>lastname:</label>
                <input type="text" name="lastname" value={e.target.value}/><br/><br/>
                <label>email:</label>
                <input type="email" name="email" value={e.target.value}/><br/><br/>
                <label>gender:</label>&nbsp;&nbsp;
                <label>Male:</label>
                 <input type="radio" name="gender" value={e.target.value}/>
                 <label>Female:</label>
                 <input type="radio" name="gender" value={e.target.value}/>
                 <select>
                     <option>react</option>
                     <option>mongodb</option>
                     <option>nodejs</option>
                     <option>javascript</option>
                 </select>
            </form>
        )
    }
}
export default Controlledforms;