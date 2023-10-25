let numberOfPeople = 0;
let totalWaited = 0;
let avgWaitingTime = 0;
let reset = false;

/*export const config = {
    runtime: "edge",
}*/

module.exports = (req, res) => {
    // Verify the request method is POST
    if (req.method === "POST") {
        console.log("CIAO")
        try {
            //const data = JSON.parse(req.body);
            /*try {
                if (data.reset) {
                    res.status(200).json({ message: "Reset required" });
                } 
                else {
                    numberOfPeople = data.numberOfPeople;
                    totalWaited = data.totalWaited;
                    avgWaitingTime = data.avgWaitingTime;
                    res.status(200).json({ message: "Data updated successfully" });
                }
            } catch (error) {
                try {
                    reset = data.reset;
                    if (reset) {
                        res.status(200).json({ message: "Reset required" });
                    }
                } catch (error) {
                    res.status(500).json({ error: "Error with data" });
                }
            }*/
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    } else if (req.method === "GET") {
        res.status(200).json({ numberOfPeople, totalWaited, avgWaitingTime });
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
};