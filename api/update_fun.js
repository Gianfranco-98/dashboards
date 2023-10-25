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
        try {
            const data = JSON.parse(req.body);
            console.log(reset)
            if (data.hasOwnProperty("reset")) {
                reset = data.reset;
                if (reset) {
                    res.status(200).json({ message: "Reset required" });
                }
                else {
                    res.status(200).json({ message: "Controlled previous requests" });
                }
            }
            else {
                numberOfPeople = data.numberOfPeople;
                totalWaited = data.totalWaited;
                avgWaitingTime = data.avgWaitingTime;
                if (reset) {
                    res.status(200).json({ message: "Reset required" });
                    reset = false;
                }
                else {
                    res.status(200).json({ message: "Data updated successfully" });
                }
            }
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    } else if (req.method === "GET") {
        res.status(200).json({ numberOfPeople, totalWaited, avgWaitingTime });
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
};