
import './App.css';
import StoreProvider from './store/StoreProvider';
import TaskListComponent from './components/container/TaskListComponent';

function App() {
  return (
    <StoreProvider>
      <TaskListComponent />
    </StoreProvider>
  );
}

export default App;
