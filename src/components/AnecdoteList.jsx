import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import {
  addNotification,
  removeNotification,
} from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) =>
    state.anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
    )
  );
  const dispatch = useDispatch();

  const orderedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);

  const handleVote = (anecdote) => {
    dispatch(addVote(anecdote.id));
    dispatch(addNotification(`You voted '${anecdote.content}'`));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
  };

  return (
    <>
      {orderedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
