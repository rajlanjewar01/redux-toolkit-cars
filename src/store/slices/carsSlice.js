import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerms: '',
        cars: []
    },
    reducers: {
        changeSearchTerms(state, action) {
            state.searchTerms = action.payload;
        },
        addCar(state, action) {
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar(state, action) {
            const updatedValue = state.cars.filter((car)=>{
                return car.id !== action.payload;
            });
            state.cars = updatedValue;
        },
    },
});

export const {
    changeSearchTerms,
    addCar,
    removeCar
} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
