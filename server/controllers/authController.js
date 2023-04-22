const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { success, error } = require("../utils/responseWrapper");

const signUpController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!email || !password || !name) {
            return res.send(error(400, "All fields are required"));
        }

        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.send(error(409, "User is alredy registered"));
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        return res.send(success(201, "user created successfully"));
    } catch (e) {
        return res.send(error(500, e.message));
    }
};

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.send(error(400, "All fields are required"));
        }

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.send(error(404, "User is not registered"));
        }

        const matched = password === user.password ? true : false;
        if (!matched) {
            return res.send(error(403, "incorrect password"));
        }

        const accessToken = generateAccessToken({
            _id: user._id,
        });
        const refreshToken = generateRefreshToken({
            _id: user._id,
        });

        res.cookie("jwt", refreshToken, {
            httpOnly: true,
            secure: true,
        });

        // res.cookie("jwt" , refreshToken , {
        //     httpOnly:true,
        //     secure:true,
        // })

        return res.send(success(200 , { accessToken }));
    } catch (e) {
        return res.send(error(500, e.message));
    }
};

const refreshAccessTokenController = (req, res) => {
    try {
        const cookies = req.cookies;

        if (!cookies.jwt) {
            return res.send(error(401 ,"Refresh Token in cookies is Required"));
        }
        const refreshToken = cookies.jwt;

        const decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_PRIVATE_KEY
        );

        const _id = decoded._id;

        const accessToken = generateAccessToken({ _id });

        return res.send(success(201 , { accessToken }));

    } catch (e) {
        console.log(e);
        return res.send(error(401, "Invalid Refresh Token"));
    }
};

const generateAccessToken = (data) => {
    try {
        const token = jwt.sign(data, process.env.ACCESS_TOKEN_PRIVATE_KEY, {
            expiresIn: "1d",
        });
        console.log(token);
        return token;
    } catch (e) {
        console.log(e);
    }
};

const generateRefreshToken = (data) => {
    try {
        const token = jwt.sign(data, process.env.REFRESH_TOKEN_PRIVATE_KEY, {
            expiresIn: "1y",
        });
        console.log(token);
        return token;
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    loginController,
    signUpController,
    refreshAccessTokenController,
};
