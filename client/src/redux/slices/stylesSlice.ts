import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StyleState {
  darkNavbar: boolean;
}

const initialState: StyleState = {
  darkNavbar: false,
};

export const stylesSlice = createSlice({
  name: 'style',
  initialState,
  reducers: {
    setDarkNavbar: (state, action: PayloadAction<boolean>) => {
      state.darkNavbar = action.payload;
    },
  },
});

export const { setDarkNavbar } = stylesSlice.actions;

export default stylesSlice.reducer;
