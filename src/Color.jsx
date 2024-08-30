import { useState } from "react";



const Color=()=>{
   const [color1,setColor1]=useState('Yellow');
   
   const [color2,setColor2]=useState('Yellow');

   const [color3,setColor3]=useState('Yellow');

   const [color4,setColor4]=useState('Yellow');
    
 return(
    <div style={{display:'flex'}}>
    
    <div onClick={()=>{setColor1('blue');setColor2('red');setColor3('red');setColor4('red')}} style={{width:'20px',height:'20px',background:color1,marginLeft:'40px'}}></div>

    <div onClick={()=>{setColor1('blue');setColor2('black');setColor3('red');setColor4('red')}} style={{width:'20px',height:'20px',border:'black',background:color2,marginLeft:'25px'}}></div>

    <div onClick={()=>{setColor1('blue');setColor2('white');setColor3('black');setColor4('red')}} style={{width:'20px',height:'20px',border:'black',background:color3,marginLeft:'25px'}}></div>

    <div onClick={()=>{setColor1('blue');setColor2('black');setColor3('black');setColor4('black')}} style={{width:'20px',height:'20px',border:'black',background:color4,marginLeft:'25px'}}></div>
    </div>
 )

}
export default Color;