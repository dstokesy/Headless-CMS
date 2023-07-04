import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';
import { HYDRATE } from 'next-redux-wrapper';

import type { IMenuItem } from '../content/menu';

// Type for our state
export interface MenuState {
    menuState?: IMenuItem[];
}
[];

// Initial state
const initialState: MenuState = {};

// Actual Slice
export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        // Action to set the menu
        setMenuState(state, action) {
            state.menuState = action.payload;
        }
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.menu
            };
        }
    }
});

export const { setMenuState } = menuSlice.actions;

export const selectMenuState = (state: AppState) => state.menu.menuState;

export default menuSlice.reducer;
