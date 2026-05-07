import { useSelector } from 'react-redux';

function CarValue() {
	const totalCost = useSelector(({ cars: { data, searchTerm }}) => {
		const filterCars = data.filter((car) => {
			return car.name?.toLowerCase().includes(searchTerm?.toLowerCase() || '');
		});
		let cost = 0;
		for(let car of filterCars) {
			cost += car.cost;
		}
		return cost;
	});

	return (
		<div className="car-value">
			Totol Cost: $ {totalCost}
		</div>
	)
}

export default CarValue;
