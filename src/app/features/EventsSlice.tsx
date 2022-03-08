import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event } from '../models/Event';

export interface EventsState {
  events: Event[];
}

const initialState: EventsState = {
  events: [],
};

export const EventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: state => {
      state.events = [];
    },
    deleteEvent: (state, action: PayloadAction<number>) => {
      state.events = [];
    },
  },
});

export const { addEvent, deleteEvent } = EventsSlice.actions;

export default EventsSlice.reducer;
