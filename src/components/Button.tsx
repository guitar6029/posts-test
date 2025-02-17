type ButtonProps = {
    clickedHello: () => void;
  }
  
  function Button({clickedHello} : ButtonProps) {
    return <button onClick={clickedHello}>Hello</button>
  }
  

  export default Button;