const React = require("react");

function New() {
	return (
		<main>
            <nav>
                <a href="/flights">All Flights</a>
            </nav>
			<h1>Add a Flight</h1>
			<form action="/flights" method="POST">
                Select your Airline: <select name="airline" >
                    <option value=''>Select</option>
                    <option value='American'>American</option>
                    <option value='Southwest'>Southwest</option>
                    <option value='United'>United</option>
                </select><br/>
                Select where you are leaving: <select name="airport" >
                    <option value=''>Select</option>
                    <option value='AUS'>AUS</option>
                    <option value='DAL'>DAL</option>
                    <option value='LAX'>LAX</option>
                    <option value='SAN'>SAN</option>
                    <option value='SEA'>SEA</option>
                </select><br/>
                Enter your Flight No.:<input type="number" name="flightNo" min='10' max='9999' required/><br/>
                Departs<input type="date"/><br/>
                <input type="submit" value='Add a flight'/>
            </form>
		</main>
	);
}
module.exports = New;
