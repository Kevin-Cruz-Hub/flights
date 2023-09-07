const React = require("react");

function List(props) {
	const { flights } = props;
    
	return (
        <main>
            <nav>
                <a href='/flights/new'>Add a Flight</a>
            </nav>
			<h1>List of Flights</h1>
            <ul>
                {
                    flights.map((flight, i)=>{
                        const date = flight.departs
                        const departure = date.toISOString()
                        return(
                            <li key={flight._id}>
                                {flight.airline} Airlines
                                <ul>
                                    <li>Flight No: {flight.flightNo}</li>
                                    <li>Departing: {flight.airport}</li>
                                    <li>Expires: {departure}</li>
                                    <a href={`/flights/${flight._id}`}>Details</a>
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
		</main>
	);
}
module.exports = List;
