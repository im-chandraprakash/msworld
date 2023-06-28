const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri = `${process.env.DATABASE_URL}`;
    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
};
