import { useSelector } from 'react-redux';

function CarList() {
	const cars = useSelector((state) => {
		return state.cars.data;
	});

	console.log(cars);

	return (
		<div>
			car list
		</div>
	)
}
export default CarList;
