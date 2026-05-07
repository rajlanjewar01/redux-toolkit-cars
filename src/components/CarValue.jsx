import { useSelector } from 'react-redux';

function CarValue() {
	const totalCost = useSelector(({ cars: { data, searchTerms }}) =>
		data
		.filter((car) => car.name?.toLowerCase().includes(searchTerms?.toLowerCase() || '')
		)
		.reduce((accumlator, car) => accumlator + car.cost, 0)
	);

	return (
		<div className="car-value">
			Totol Cost: $ {totalCost}
		</div>
	)
}

export default CarValue;
