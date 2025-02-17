import './App.css';
import MyWrapper from './components/MyWrapper';
import Posts from './components/Posts/Posts';
import TabButton from './components/TabButton/TabButton';
import {useState} from 'react'

function App() {

  const [currentBtn, setBtn] = useState<string>('About')

  const handleClick = (e: string) => {

    setBtn(e)
  }

  return (
    <div className="flex flex-col gap-1">
      <MyWrapper>
        <h1>Post Info</h1>
      </MyWrapper>
      <Posts />
      <span>Current Btn Clicked : {currentBtn}</span>
      <TabButton classStr="p-1" title="About" tabClicked={handleClick}>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, provident!</span>
      </TabButton>

      <TabButton classStr="p-1" title="Services" tabClicked={handleClick}>
          <span>Lorem, ipsum dolor.</span>
      </TabButton>
    </div>
  );
}

export default App;
