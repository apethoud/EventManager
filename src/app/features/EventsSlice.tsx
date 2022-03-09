import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Event } from '../models/Event';
import _ from 'lodash';

export interface EventsState {
  eventList: Event[];
}

const initialState: EventsState = {
  eventList: [],
};

export const EventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Event>) => {
      state.eventList.push(action.payload);
    },
    deleteEvent: (state, action: PayloadAction<number>) => {
      _.remove(state.eventList, event => {
        event.id === action.payload;
      });
    },
  },
});

export const { addEvent, deleteEvent } = EventsSlice.actions;

export default EventsSlice.reducer;
