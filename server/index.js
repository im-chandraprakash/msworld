const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./dbConnect");
const authRouter = require("./routers/authRouters");
const cseRouter = require("./routers/cseRouter");
const adminRouter = require("./routers/adminRouters");
const userRouter = require('./routers/userRouters');
const quizRouter = require('./routers/quizRouter');
const branchRouter = require('./routers/branchRouter');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const cloudinary = require("cloudinary").v2;

const morgan = require("morgan");
const { success } = require("./utils/responseWrapper");

dotenv.config("./.env");

const app = express();

app.use(express.json({limit:'10mb'}));
app.use(morgan("common"));
app.use(cookieParser());
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);

app.use(
    fileUpload({
        useTempFiles: true,
        // limits: { fileSize: 50 * 2024 * 1024 },
    })
);

cloudinary.config({
    secure: true,
    cloud_name: "dkp7kraja",
    api_key: "238432174138763",
    api_secret: "DeHMIYfihSpyjfCWR3sTOQSZhnY",
});

app.use("/auth", authRouter);
app.use("/cse", cseRouter);
app.use("/admin", adminRouter);
app.use('/user' , userRouter);
app.use('/quiz' , quizRouter);
app.use('/branch' , branchRouter);

const PORT = process.env.PORT || 4001;
dbConnect();
app.listen(PORT, () => {
    console.log(`listening on port : ${PORT} `);
});
