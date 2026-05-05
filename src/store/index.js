// 1. import configureStore from @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
// 2. import slices
import { carsReducer, addCar, removeCar, changeSearchTerm } from './slices/carsSlice';
import { formReducer, changeName, changeCost } from './slices/formSlice';

// 3. create store
const store = configureStore({
	reducer: {
		cars: carsReducer,
		form: formReducer
	}
});

// 4. export store along with all the actions creator functions
export {
	store,
	changeName,
	changeCost,
	addCar,
	removeCar,
	changeSearchTerm
}
