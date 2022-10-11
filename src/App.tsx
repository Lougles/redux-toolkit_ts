import './App.css';
import PostContainer from './components/PostContainer';
// import { useAppDispatch, useAppSelector } from './store/hooks/redux';
// import { fetchUsers } from './store/reducers/ActionCreators';
// import { userSlice } from './store/reducers/userSlice';

function App() {
  // const dispatch = useAppDispatch();
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer);
  // const {usersFetchin,usersFetchinSuccess,usersFetchinError} = userSlice.actions

  return (
    <div>
      <PostContainer />
      {/* <ul>
        {users.map(user => 
          <li key={user.id}>{user.name}</li>
          )}
      </ul>
      <button onClick={() => dispatch(fetchUsers())}>Fetch User</button> */}
    </div>
  );
}

export default App;
