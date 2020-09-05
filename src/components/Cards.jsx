import React,{useState} from 'react'

export const Cards = (props) => {
    let {datas:{_id,poster,genre,director,title,stars,language,pageViews,totalVoted}}=props
   
    const[total,setTotal]=useState(totalVoted)
 
const incCount=()=>{
    setTotal((val)=> val+1)

}

const decCount=()=>{
    if(total!==0){
        setTotal((val)=> val-1)
    }
    else{
        setTotal(0)
    }

  

}
return(
    <React.Fragment>
          <div className="main-div">

<div className="vote-div">

<button onClick={()=>{
    incCount()
}} ><i className="fas fa-arrow-alt-circle-up fa-2x"></i></button>
<span style={{textAlign:"center"}}>{total}</span>
<button onClick={()=>{
    decCount()
}}><i className="fas fa-arrow-alt-circle-down fa-2x"></i></button>
<p style={{textAlign:'center'}}>Votes</p>
</div>


<div className="img-div">
    <img src={poster} alt="img" />
</div>

<div className="info-div">

    <div className="inn-div">
    <p>{title}</p>
<p>Genre:&nbsp; {genre}</p>
<p>Director:&nbsp;  {director.map((data)=>{
return data
})}</p>

<p >Starring:&nbsp;{stars.map((data)=>{
  return data
})}</p>

<p>Language:{language}</p>
<p><span style={{color:"blue"}}>{pageViews} views</span> | Voted by {totalVoted} People</p>
    </div>


</div>



</div>

<div className="butt-div">
<button>Watch-Trailer</button>
</div>
    </React.Fragment>
  
)
}
