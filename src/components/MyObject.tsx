
  
  
  type MyObjectProps = {
    id: number,
    name: string,
    job?: string
  
  }
  
  function MyObject({...props}: MyObjectProps){
    return (
      <div>
        <span>{props.id}</span><br />
        <span>{props.name}</span><br />
        {props.job && <span>{props.job}</span>}
      </div>
    )
  }

  export default MyObject;