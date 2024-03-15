import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload;
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    changeAnecdote(state, action) {
      const changedAnecdote = action.payload;
      let { id } = changedAnecdote;
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );
    },
  },
});

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const newAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const plusVote = (content) => {
  return async (dispatch) => {
    const changedAnecdote = await anecdoteService.plusVote(content);
    dispatch(changeAnecdote(changedAnecdote));
  };
};

export const { setAnecdotes, appendAnecdote, changeAnecdote } =
  anecdoteSlice.actions;
export default anecdoteSlice.reducer;
