function Leftside(){
    
   let component=["🏠 HOME","ℹ️ ABOUT","🛎️ SERVICE","🗂️ PORTFOLIO","📰 NEWS","📞 CONTACT"];
    
    return (
              <div>
              <ul>
                  {component.map((val,idx,arr)=>{return(<li key={idx}>{val}</li>)})} 
              </ul>
            </div>
)}

export default Leftside;


