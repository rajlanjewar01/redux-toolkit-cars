import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerms: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerms = action.payload;
        },
        addCar(state, action) {
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar(state, action) {
            state.data = state.data.filter((car) => car.id !== action.payload);
        },
    },
});

export const {
    changeSearchTerm,
    addCar,
    removeCar
} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
