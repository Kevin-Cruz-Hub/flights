const React = require("react");

function Show({flight}) {
	console.log(flight);
	return (
		<main>
			<nav>
				<a href="/flights">Back to Flights</a>
			</nav>
			<h1>Flight No.{flight.flightNo} Details</h1>
            <div>Airline: {flight.airline} Airlines</div>
			<div>Flight No. {flight.flightNo}</div>
			<div>Leaving: {flight.airport} Airport</div>
			
			{/* Destinations Mapping */}
			<div>
				{
					flight.destination.length &&
						flight.destination.map((dest)=>{
							return(
								<div key={dest._id}>
									<span>Departing From: {dest.airport1}| Arrived At: {dest.airport2} | Arrival Time: {new Date(dest.arrival).toISOString()}</span>
								</div>
							)
						})
				}
			</div>

			{/* Destination Form */}
			<div>
				<h2>Destinations</h2>
				<form method="POST" action={`/api/flights/addflight/${flight._id}?_method=PUT`}>
					Departing: <select name="airport1" >
                    <option value=''>Select</option>
                    <option value='AUS'>AUS</option>
                    <option value='DAL'>DAL</option>
                    <option value='LAX'>LAX</option>
                    <option value='SAN'>SAN</option>
                    <option value='SEA'>SEA</option>
                </select>
					Arriving: <select name="airport2" >
                    <option value=''>Select</option>
                    <option value='AUS'>AUS</option>
                    <option value='DAL'>DAL</option>
                    <option value='LAX'>LAX</option>
                    <option value='SAN'>SAN</option>
                    <option value='SEA'>SEA</option>
                </select>
				Arriving<input type="date"/><br/>
				<input type="submit" value='Add a flight'/>
				</form>
			</div>
		</main>
	);
}
module.exports = Show;
