import './App.css';
import MyWrapper from './components/MyWrapper';
import Posts from './components/Posts/Posts';
import TabButton from './components/TabButton/TabButton';
import {useState} from 'react'
import Content from './components/Content/Content';
import Slider from './components/Slider/Slider';

function App() {

  const [currentTab, setTab] = useState<string>()

  const handleClick = (e: string) => {

    setTab(e)
  }
  let tabSelected = <p>Please select a tab</p>

  if (currentTab){
    tabSelected = <TabButton classStr="p-1" title={currentTab} tabClicked={handleClick}>
    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, provident!</span>
</TabButton>

  }

  return (
    <div className="flex flex-col gap-1">
      <MyWrapper>
        <h1>Post Info</h1>
      </MyWrapper>
      <Posts />
      <div className="flex gap-1">
        <span className={`tab ${currentTab === "About" ? 'selected-tab' : 'default-tab'} `}  onClick={() => handleClick("About")}>About</span>
        <span className={`tab ${currentTab === "Services" ? 'selected-tab' : 'default-tab'} `} onClick={() => handleClick("Services")}>Services</span>
      </div>
      {tabSelected}
      <Content buttons={<div><TabButton classStr="p-1" title="text1" tabClicked={handleClick}>
    <span>Lorem, ipsum dolor.</span>
</TabButton>
<TabButton classStr="p-1" title="text2" tabClicked={handleClick}>
    <span>Lorem, ipsum.</span>
</TabButton>
<TabButton classStr="p-1" title="text3" tabClicked={handleClick}>
    <span>Lorem.</span>
</TabButton>
</div>}>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora molestiae perferendis nihil facere! Qui fugiat fugit labore beatae aspernatur ad natus. Omnis labore consequatur obcaecati, molestias aliquam a quibusdam!</span>
      </Content>
      <Slider />
    </div>
  );
}

export default App;
