const express = require("express");
const app = express();

const allowedKeys = new Set([
    "REDACTED-UNIQUE-SERVER-KEY",   // replace this with your real key(s)
    "ANOTHER-SERVER-KEY"
]);

app.get("/api/check-license", (req, res) => {
    const key = req.query.key;
    res.json({ authorized: allowedKeys.has(key) });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("✅ License API running on port", PORT));
