import AnecdoteForm from "./components/AnecDoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import { useSelector } from "react-redux/es/hooks/useSelector";

const App = () => {
  const notification = useSelector((state) => state.notification);
  return (
    <div>
      <h2>Anecdotes</h2>
      {notification && <Notification />}
      {!notification && <Filter />}
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
