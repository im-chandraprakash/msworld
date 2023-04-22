const getAllPostController = async (req, res) => {

    try {        
        console.log("This is post Controller");
        res.send("this is from post Controllers");
    } catch (e) {
        console.log(e);
    }
};
module.exports = {
    getAllPostController,
};
