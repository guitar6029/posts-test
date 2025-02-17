import './App.css';
import MyWrapper from './components/MyWrapper';
import Posts from './components/Posts/Posts';

function App() {

  return (
    <div>
      <MyWrapper>
        <h1>Post Info</h1>
      </MyWrapper>
      <Posts />
    </div>
  );
}

export default App;
