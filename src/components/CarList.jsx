import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from "@reduxjs/toolkit";
import { removeCar } from '../store';

const memoizedCars = createSelector(
  [(state) => state.cars.data, (state) => state.cars.searchTerms],
  (data, searchTerm) =>
    data.filter((car) =>
      car.name?.toLowerCase().includes(searchTerm.toLowerCase())
    )
);

function CarList() {
	const dispatch = useDispatch();

	const cars = useSelector(memoizedCars);

	const handleCarDelete = (car) => {
		dispatch(removeCar);
	}

	const renderedCars = cars.map((car) => {
		return (
			<div key={car.id} className='panel'>
				<p>{car.name} - ${car.cost}</p>
				<button 
					className='button is-dange'
					onClick={() => {handleCarDelete(car)}}
				>
					Delete
				</button>
			</div>
		)
	});

	return (
		<div className='car-list'>
			{renderedCars}
			<hr />
		</div>
	)
}
export default CarList;
