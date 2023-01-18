const getTasks = (req,res) => {
    res.status(200).json({message: 'Get Goals'})
}

module.exports = {
    getTasks,
}