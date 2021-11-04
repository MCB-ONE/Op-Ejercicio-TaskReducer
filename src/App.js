
import './App.css';
import StoreProvider from './store/StoreProvider';
import TaskListComponent from './components/container/TaskListComponent';
import FilterProvider from './store/FilterProvider';

function App() {
  return (
    <FilterProvider>
      <StoreProvider>
        <TaskListComponent/>
      </StoreProvider>
    </FilterProvider>
  );
}

export default App;
