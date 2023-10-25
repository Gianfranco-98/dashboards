let numberOfPeople = 0;
let totalWaited = 0;
let avgWaitingTime = 0;

/*export const config = {
    runtime: "edge",
}*/

module.exports = (req, res) => {
    // Verify the request method is POST
    if (req.method === "POST") {
        try {
            const data = JSON.parse(req.body);
            numberOfPeople = data.numberOfPeople;
            totalWaited = data.totalWaited;
            avgWaitingTime = data.avgWaitingTime;
            //res.status(200).json({ message: "Data updated successfully" });
            res.status(200).json({ message: data });
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    } else if (req.method === "GET") {
        res.status(200).json({ numberOfPeople, totalWaited, avgWaiting, avgWaitingTime });
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
};