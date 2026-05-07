import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from "@reduxjs/toolkit";
import { removeCar } from '../store';

const memoizedCars = createSelector(
  [
    (state) => state.form.name,
    (state) => state.cars.data,
    (state) => state.cars.searchTerms
  ],
  (name, data, searchTerms) => {
    const filteredCar = data.filter((car) =>
      car.name?.toLowerCase().includes(searchTerms?.toLowerCase() || '')
    );

    return {
      cars: filteredCar,
      name
    };
  }
);

function CarList() {
	const dispatch = useDispatch();

	const { cars, name } = useSelector(memoizedCars);

	const handleCarDelete = (car) => {
		dispatch(removeCar);
	}

	const renderedCars = cars.map((car) => {
		const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
		return (
			<div key={car.id} className={`panel ${bold && 'bold'}`}>
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
