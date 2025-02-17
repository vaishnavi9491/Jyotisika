import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: 'en', // Default language
    availableLanguages: ['en', 'hi', 'mr'], // Supported languages: English, Hindi, Marathi
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            if (state.availableLanguages.includes(action.payload)) {
                state.language = action.payload; // Update language if it exists in the list
            }
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
