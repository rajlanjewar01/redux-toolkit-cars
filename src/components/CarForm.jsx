import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost } from '../store';

function CarForm() {
	const dispatch = useDispatch();

	// access value from store with useSelector
	const name = useSelector((state) => state.form.name);
  	const cost = useSelector((state) => state.form.cost);

	// trigger state change with dispatch
	const handleNameChange = (event) => {
		dispatch(changeName(event.target.value));
	};

	const handleCostChange = (event) => {
		const carCost = parseInt(event.target.value) || 0;
		dispatch(changeCost(carCost));
	}

	return (
		<div className="car-form panel">
			<h4 className="subtitle is-3">
				Add Car
			</h4>
			<form>
				<div className="field-group">
					<div className="field">
						<label className="label">Name</label>
						<input 
							className="input is-expanded"
							value={name}
							onChange={handleNameChange}
						/>
						<label className="lable">Cost</label>
						<input
							className="input is-expanded"
							value={cost || ''}
							onChange={handleCostChange}
						/>
					</div>
				</div>
			</form>
		</div>
	)
}

export default CarForm;
