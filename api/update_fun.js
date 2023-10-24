let numberOfPeople = 0; // Initialize with an initial value

module.exports = (req, res) => {
    // Verify the request method is POST
    if (req.method === "POST") {
        console.log("EI23847928374982798");
        try {
            // Parse the request body as JSON
            const data = JSON.parse(req.body);
            numberOfPeople = data.numberOfPeople;
            //console.log(numberOfPeople)

            // Respond with a success message
            res.status(500).json({ message: "Data updated successfully" });

        } catch (error) {
            // Handle any errors
            res.status(500).json({ error: "Internal server error" });
        }
    } else if (req.method === "GET") {
        // Handle GET request to retrieve the number of people waiting
        console.log("A<SJDHAKLSJHDLKAJ");
        res.status(200).json({ numberOfPeople });
    } else {
        // Return an error for unsupported request methods
        res.status(405).json({ error: "Method not allowed" });
    }
};