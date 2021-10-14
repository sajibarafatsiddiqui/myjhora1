
const seasonConfig={
    summer:{text:'Very Hot Weather!',iconName:'sun'},
    winter:{text:'Weather is Icy!',iconName:'snowflake'},
}
const getSeason=(lat,month)=>{
    if(month>3 && month<10 ){
       return lat>0? 'winter' : 'summer';
    }
    return lat>0?'summer' : 'winter';
}

const Season=(props)=>{const season =getSeason(props.lat,new Date().getMonth())
    const {text,iconName}=seasonConfig[season]
return(<div className={`Season ${season}`}><i className={`icon-left massive ${iconName} icon`}></i><h1>{text}</h1><i className={`icon-left massive ${iconName} icon`}></i></div>)}

export default Season;