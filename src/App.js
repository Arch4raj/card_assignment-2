// import { useState } from 'react';
// import './App.css'
// function App(){
//     const names=["mahi","reji","arju"];
//     const [like,setLike] = useState(0)
//     return(
//         <div>
//         {names.map((nm)=>(<Message name={nm}/>))}
//         <button onClick={()=>setLike(like+1)}>👍{like}</button>
        
//         </div>
//     );

// } export default App;
// function Message(props){
//     return(
//         <div>
//             <h2>hello {props.name} </h2>
//         </div>
//     );
// }


// Movie App------------>

// import './App.css';
// import {useState} from 'react';
// function App(){
//     const movielist=[
//         {
//         name: "RRR",
//         poster:
//         "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//         rating: 8.8,
//         summary:
//         "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
        
//         },
//         {
//         name: "Iron man 2",
//         poster:
//         "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//         rating: 7,
//         summary:
//         "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
        
//         },
//         {
//         name: "No Country for Old Men",
//         poster:
//         "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//         rating: 8.1,
//         summary:
//         "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
        
//         },
//         {
//         name: "Jai Bhim",
//         poster:
//         "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//         summary:
//         "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//         rating: 8.8,
        
//         },
//         {
//         name: "The Avengers",
//         rating: 8,
//         summary:
//         "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//         poster:
//         "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
        
//         },
//         {
//         name: "Interstellar",
//         poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//         rating: 8.6,
//         summary:
//         "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
        
//         },
//         {
//         name: "Baahubali",
//         poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//         rating: 8,
//         summary:
//         "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
        
//         },
//         {
//         name: "Ratatouille",
//         poster:
//         "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//         rating: 8,
//         summary:
//         "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
        
//         }
//         ];
//     return(
//         <div className='movie'>
//       {movielist.map((nm)=><Movie movie={nm} />)}
            
//         </div>
//     );
// }export default App
// function Movie({movie}){
//    const [show,setShow]= useState(true)
//    const parastyle={display : show?"block":"none"}
//     return(
//         <div className='movie-container'>
//         <img src={movie.poster} className="movie-image"></img>
//         <div className='movie-specs'>
//             <h2 className='movie-name'>{movie.name}</h2>
//             <p className='movie-rating'>⭐{movie.rating}</p>
//         </div>
//         <button onClick={()=>setShow(!show)}>toggle</button>
//         <p style={parastyle}className='movie-summary'>{movie.summary}</p>
//     </div>
//     );
    
// }

// Add color----------->

// import { color } from '@mui/system';
// import { useState } from 'react';
// import './App.css';
// function Addcolor(){
//     const [color,setColor]=useState();
//     const initialcolor=["green","blue"]
//     const[colorlist,setColorlist]=useState(initialcolor);
//     const styles={
//         backgroundColor:color,
//     };
//     return(
// <div className='color-input'>
// <input style={styles} onChange={(event)=>setColor(event.target.value)} placeholder='name'></input>

// <button onClick={()=>setColorlist([...colorlist,color])}>Add Color</button>
//    {colorlist.map((clr)=> <Colorbox color={clr} />)} 

// </div>
//     );

   
// }export default Addcolor;

// function Colorbox({color}){
//     const styles={
//         backgroundColor:color,
//         height:"25px",
//         width:"250px"
        
//     };
//     return(
//         <div style={styles}>

//         </div>
//     );
// }


//Add movie---------->


// import { useState } from 'react';
// import './App.css';
// function App(){
    // const initialmovielist=[
    //     {
    //                 name: "RRR",
    //                 poster:
    //                 "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    //                 rating: 8.8,
    //                 summary:
    //                 "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
                    
    //                 },
    //                 {
    //                 name: "Iron man 2",
    //                 poster:
    //                 "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    //                 rating: 7,
    //                 summary:
    //                 "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
                    
    //                 },
    //                 {
    //                 name: "No Country for Old Men",
    //                 poster:
    //                 "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    //                 rating: 8.1,
    //                 summary:
    //                 "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
                    
    //                 },
    //                 {
    //                 name: "Jai Bhim",
    //                 poster:
    //                 "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    //                 summary:
    //                 "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    //                 rating: 8.8,
                    
    //                 },
    //                 {
    //                 name: "The Avengers",
    //                 rating: 8,
    //                 summary:
    //                 "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    //                 poster:
    //                 "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
                    
    //                 },
    //                 {
    //                 name: "Interstellar",
    //                 poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    //                 rating: 8.6,
    //                 summary:
    //                 "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
                    
    //                 },
    //                 {
    //                 name: "Baahubali",
    //                 poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    //                 rating: 8,
    //                 summary:
    //                 "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
                    
    //                 },
    //                 {
    //                 name: "Ratatouille",
    //                 poster:
    //                 "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    //                 rating: 8,
    //                 summary:
    //                 "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
                    
    //                 }
    // ];
//     const [movielist,setmovielist] = useState(initialmovielist);
// return(
//     <div>
//         <Movielist movielist={movielist} setmovielist={setmovielist}/>
//     </div>
// );
// }
// export default App;
 
// function Movielist({movielist,setmovielist}){
   
//     const [name,Setname]=useState();
//     const [poster,Setposter]=useState();
//     const [rate,Setrate]=useState();
//     const [summary,Setsummary]=useState();
//     return(
//         <div className='input-movie'>
//         <input onChange={(event)=>Setname(event.target.value)} placeholder='name'/>
//         <input onChange={(event)=>Setposter(event.target.value)} placeholder='poster'/>
//         <input onChange={(event)=>Setrate(event.target.value)} placeholder='rating'/>
//         <input onChange={(event)=>Setsummary(event.target.value)} placeholder='summary'/>
//         <button onClick={()=>{ 
            
//             const newmovie = {
//                 name:name,
//                poster:poster,
//                rate:rate,
//                summary:summary,
//             };
//             setmovielist([...movielist,newmovie])
//         }}>Add Movie</button>
//         <div className='movie'>
//         {movielist.map((mv)=>(<Movie movie={mv}/>))}
//         </div>
       
        
//         </div>
//     );
// } 

// function Movie({movie}){
//        const [show,setShow]= useState(true)
//        const parastyle={display : show?"block":"none"}
//         return(
//             <div className='movie-container'>
//             <img src={movie.poster} className="movie-image"></img>
//             <div className='movie-specs'>
//                 <h2 className='movie-name'>{movie.name}</h2>
//                 <p className='movie-rating'>⭐{movie.rating}</p>
//             </div>
//             <button onClick={()=>setShow(!show)}>toggle</button>
//             <p style={parastyle}className='movie-summary'>{movie.summary}</p>
//         </div>
//         );
        
//     }
    

// react router------------>


import './App.css';

import { useState } from 'react';
import { Routes,Route,Link,useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Badge from '@mui/material/Badge';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers';
function App(){
    
const initialmovielist=[

    {
    
    "name": "RRR",
    "poster":
    "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    "rating": 8.8,
    "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
    "name": "Iron man 2",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    "rating": 7,
    "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
    
    "name": "No Country for Old Men",
    "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    "rating": 8.1,
    "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
    
    "name": "Jai Bhim",
    "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    "rating": 8.8,
    "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
    
    "name": "The Avengers",
    "rating": 8,
    "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
    
    "name": "Interstellar",
    "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    "rating": 8.6,
    "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
    
    "name": "Baahubali",
    "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    "rating": 8,
    "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
    
    "name": "Ratatouille",
    "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    "rating": 8,
    "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    }
    ]
const [movielist,setmovielist] =useState(initialmovielist);
const navigate= useNavigate()
    return(
        <div>
            <AppBar position="static">
        <Toolbar>
         
          <Button color="inherit" onClick={()=>navigate('/movies')}>movies</Button>
          <Button color="inherit" onClick={()=>navigate('/movies/add')}>AddMovies</Button>
          {/* <Button color="inherit" onClick={()=>navigate('/tictac')}>tic_tac_toe</Button> */}
        </Toolbar>
      </AppBar>
            {/* <Link to="/movies">movie</Link> */}
       <Routes>
      <Route path="/movies" element={<Movielist movielist={movielist} setmovielist={setmovielist}/>}/>
      <Route path="/movies/:id" element={<Moviedetails movielist={movielist} />}/>
      {/* <Route path="/tictac" element={<Tictactoe/>}/> */}
      <Route path="/movies/add" element={<Addmovie  movielist={movielist} setmovielist={setmovielist} />}/>
       </Routes>
        </div>
    );
}
export default App;

function Movielist({movielist,setmovielist}){
   
        // const [name,Setname]=useState();
        // const [poster,Setposter]=useState();
        // const [rate,Setrate]=useState();
        // const [summary,Setsummary]=useState();
        // const addmovie=()=>{
        //     const newmovie = {
        //         name:name,
        //        poster:poster,
        //        rate:rate,
        //        summary:summary,
        //     };
        //     setmovielist([...movielist,newmovie])

        // }
        
//             <div className='input-movie'>
//   <TextField  label="name" variant="standard" onChange={(event)=>Setname(event.target.value)} />
//   <TextField  label="poster" variant="standard" onChange={(event)=>Setposter(event.target.value)} />
//   <TextField  label="rating" variant="standard" onChange={(event)=>Setrate(event.target.value)} />
//   <TextField  label="summary" variant="standard" onChange={(event)=>Setsummary(event.target.value)} />
          
{/* <input onChange={(event)=>Setname(event.target.value)} placeholder='name'/>
            <input onChange={(event)=>Setposter(event.target.value)} placeholder='poster'/>
            <input onChange={(event)=>Setrate(event.target.value)} placeholder='rating'/>
            <input onChange={(event)=>Setsummary(event.target.value)} placeholder='summary'/>
            <button onClick={()=>{ 
                
                const newmovie = {
                    name:name,
                   poster:poster,
                   rate:rate,
                   summary:summary,
                };
                setmovielist([...movielist,newmovie])
            }}>Add Movie</button> */}

            // <Button onClick={addmovie} variant="outlined">Add Movie</Button>
            return(
            <div>
            <div className='movie'>
            {movielist.map((mv,index)=>(<Movie key={index} movie={mv} id={index} />))}
            </div>
           
           </div >
            
        );
    } 
    function Addmovie({movielist,setmovielist}){
        const [name,Setname]=useState();
        const [poster,Setposter]=useState();
        const [rate,Setrate]=useState();
        const [summary,Setsummary]=useState();
        const addmovie=()=>{
            const newmovie = {
                name:name,
               poster:poster,
               rate:rate,
               summary:summary,
            };
            setmovielist([...movielist,newmovie])

        }
        return(
            <div className='input-movie'>
            <TextField  label="name" variant="standard" onChange={(event)=>Setname(event.target.value)} />
            <TextField  label="poster" variant="standard" onChange={(event)=>Setposter(event.target.value)} />
            <TextField  label="rate" variant="standard" onChange={(event)=>Setrate(event.target.value)} />
            <TextField  label="summary" variant="standard" onChange={(event)=>Setsummary(event.target.value)} />
            <Button onClick={addmovie} variant="outlined">Add Movie</Button>
            </div>
        );
    }
    
    function Movie({movie,id}){
           const [show,setShow]= useState(true)
           const parastyle={display : show ? "block":"none"}
           const navigate= useNavigate()
            return(
                <div className='movie-container'>
                <img src={movie.poster} className="movie-image"></img>
                <div className='movie-specs'>
                    <h2 className='movie-name'>{movie.name}</h2>
                    <IconButton onClick={()=>setShow(!show)}   aria-label="delete">
                {show ? <ExpandLessIcon/>:< ExpandMoreIcon/>}
                </IconButton>
                <IconButton onClick={()=>navigate(`/movies/${id}`)} color="primary"  aria-label="delete">
                <InfoIcon />
                </IconButton>
                    <p className='movie-rating'>⭐{movie.rating}</p>
                </div>
                {/* <button onClick={()=>setShow(!show)}>toggle</button> */}
                
                {/* <Link to={`/movies${id}`}>info</Link> */}
                {/* <button onClick={()=>navigate(`/movies/${id}`)}>info</button> */}
               
                <p style={parastyle}className='movie-summary'>{movie.summary}</p>
            <Counter />

            </div>
            );
            
            
        }
        function Counter(){
            const [like,setLike]=useState(0);
            const [dislike,setDisLike]=useState(0);
            return(
          <div>
            {/* <button onClick={()=>setLike(like+1)}>👍{like}</button> */}
            <IconButton onClick={()=>setLike(like+1)}  color="primary">
            <Badge badgeContent={like} color="primary">
            👍
              </Badge>
                </IconButton>
                <IconButton onClick={()=>setDisLike(dislike+1)}  color="primary">
            <Badge badgeContent={dislike} color="error">
            👎
              </Badge>
                </IconButton>
            {/* <p>{like}</p> */}
          </div>
          
            );
          }
        function Moviedetails({movielist}){
            const {id}=useParams()
            const movie=movielist[id];
        return(
            <div>
             <iframe width="713"
             height="401" 
             src={movie.trailer} 
             title="YouTube video player" frameborder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowfullscreen></iframe>
            <div className='movie-specs'>
            <h2 className='movie-name'>{movie.name}</h2>
            <p className='movie-rating'>⭐{movie.rating}</p>
            </div>
            </div>
            
        );
            
        }

        // tic-tac-toe---------->


        // function Tictactoe(){

        //     return(
        //         <div >
        //     <h3>fun game</h3>
        //     <Board/>
            
            
        //         </div>
        //     )
        // }
        // function Board(){
        //     const [board,setBoard]=useState([null,null,null,null,
        //         null,null,null,null,null,null,null,null])
        //    const [isxturn,setIsxturn] =useState(true)
        //         return(
                
        //         <div className='board'>
        //             {board.map((val,index)=><Gamebox val={index} onPlayerClick={()=>handleClick(index)} />)}
            
        //         </div>
        //     )
        // }
        // function Gamebox({val,onPlayerClick}){
        //     // const [val,setVal]=useState()
        //     const style={
        //         color : val == 'x' ?'green':'red'
        //     }
        //     return(
        //         <div style={style} className='box' onClick={onPlayerClick}>
        //          {val}
        //         </div>
        //     )
        // }