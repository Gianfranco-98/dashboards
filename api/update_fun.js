module.exports = (req, res) => {
    // Verify the request method is POST
    console.log(req.method)
    if (req.method === "POST") {
        try {
            // Parse the request body as JSON
            const numberOfPeople = JSON.parse(req.body);
            console.log(numberOfPeople)

            // Respond with a success message
            res.status(200).json({ numberOfPeople });

        } catch (error) {
            // Handle any errors
            res.status(500).json({ error: "Internal server error" });
        }
    } else {
        // Return an error for unsupported request methods
        res.status(405).json({ error: "Method not allowed" });
    }
};