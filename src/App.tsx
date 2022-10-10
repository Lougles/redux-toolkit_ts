import './App.css';
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { userSlice } from './store/reducers/userSlice';

function App() {
  const {count} = useAppSelector(state => state.userReducer);
  const {incremented} = userSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(incremented(Number(prompt())))}>PLUS</button>
    </div>
  );
}

export default App;
