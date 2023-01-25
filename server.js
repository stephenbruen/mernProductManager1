const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extend: true }));

app.use (
    cors({
        origin: "http://localhost:3000",
    })
);

require("./config/mongoose.config");
//require("./routes/product.routes")(app);

require("./routes/product.routes")(app);

app.listen(8000, () => {
    console.log("Listening on Port 8000");
});