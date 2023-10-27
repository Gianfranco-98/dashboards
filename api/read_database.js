// Initialization
let numberOfPeople = "0";
let totalWaited = "0";
let avgWaitingTime = "0";
let reset = false;


// API endpoint
export const revalidate=0
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
module.exports = (req, res) => {
    //console.log(reset, typeof(reset))
    // -> Handling POST requests
    //res.setHeader("Cache-Control", "no-store, max-age=0");
    if (req.method === "POST") {
        try {
            const data = JSON.parse(req.body);
            if (data.hasOwnProperty("reset")) {
                reset = data.reset;
                if (reset) {
                    numberOfPeople = "0";
                    totalWaited = "0";
                    avgWaitingTime = "0";
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
                    numberOfPeople = "0";
                    totalWaited = "0";
                    avgWaitingTime = "0";
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
    // -> Handling GET requests
    } else if (req.method === "GET") {
        res.status(200).json({ numberOfPeople, totalWaited, avgWaitingTime });
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
};