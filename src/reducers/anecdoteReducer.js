import { createSlice } from "@reduxjs/toolkit";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addVote(state, action) {
      const id = action.payload;
      const anecdoteToChange = state.find((n) => n.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      };
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
    },
    newAnecdote(state, action) {
      return [...state, action.payload];
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { addVote, newAnecdote, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
