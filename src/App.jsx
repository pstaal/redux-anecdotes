import { useSelector } from "react-redux";
import { addVote } from "./reducers/anecdoteReducer";
import AnecdoteForm from "./components/AnecDoteForm";
import AnecdoteList from "./components/AnecdoteList";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
