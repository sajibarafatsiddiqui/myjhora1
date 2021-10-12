import Faker from 'faker';


function getTime(){return (new Date()).toLocaleTimeString()}
 const Comments=(props)=>{
    console.log(props);
    return(  
       
        <div>
    
       <div className="ui container comments">
         <div className="comment"><a href="/" className="avatar"><img alt="avatar" src={Faker.image.avatar()}/></a>
        <div className="content"><a href="/" className="author">{props.author}</a>
        <div className="metadata"><span className="date">{getTime()}</span></div>
        <div className="text">Nice Blog Post</div></div>
        
   
         </div>
       </div>
       </div>
       );
}
export default Comments;