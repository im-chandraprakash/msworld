const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./dbConnect");
const authRouter = require("./routers/authRouters");
const subjectRouter = require("./routers/subjectRouter");
const adminRouter = require("./routers/adminRouters");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const morgan = require("morgan");

dotenv.config("./.env");

const app = express();

app.use(express.json());
app.use(morgan("common"));
app.use(cookieParser());
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

app.use("/auth", authRouter);
app.use("/sub", subjectRouter);
app.use("/admin" ,adminRouter);

const PORT = process.env.PORT || 4001;
dbConnect();
app.listen(PORT, () => {
    console.log(`listening on port : ${PORT} `);
});
