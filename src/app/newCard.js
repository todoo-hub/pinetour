export function Card (props) {
      const { id,  title, genre,  rating, watched,imagess} = props;

  return (
   <div style={{padding: "56px",backgroundColor:"blue"}}>
    <h2 style= {{ padding: "50px", backgroundColor: "blue"}}>{title}</h2>
    <h2 style={{ display:"flex",gap:"50px"}}>{id}
    </h2>
   </div>
  )
}




