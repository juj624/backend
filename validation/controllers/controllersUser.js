

const addUser = (req, res) => {
    const userAdd = req.body;
    console.log(userAdd);
    res.json({
        status: "OK",
        message: "No users yet",
        data: userAdd,
    });
}






module.exports = { addUser };