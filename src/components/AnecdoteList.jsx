import { useSelector, useDispatch } from "react-redux";
import { plusVote, initializeAnecdotes } from "../reducers/anecdoteReducer";
import { useEffect } from "react";

import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) =>
    state.anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
    )
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, []);

  const orderedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes);

  const handleVote = (anecdote) => {
    dispatch(plusVote(anecdote));
    dispatch(setNotification(`You voted '${anecdote.content}'`, 5000));
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
