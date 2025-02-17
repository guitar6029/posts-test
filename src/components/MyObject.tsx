
  
  
  type MyObjectProps = {
    id: number,
    name: string,
    job?: string
  
  }
  
  function MyObject({...props}: MyObjectProps){
    return (
      <div>
        <span>id : {props.id}</span><br />
        <span>name: {props.name}</span><br />
        {props.job && <span>job: {props.job}</span>}
      </div>
    )
  }

  export default MyObject;