import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
  id: number;
  image: string; // Base64 URL
  title: string;
  description: string;
}

interface ItemState {
  items: Item[];
}

const initialState: ItemState = {
  items: [],
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = itemSlice.actions;

export default itemSlice.reducer;
