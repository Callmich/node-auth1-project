module.exports = (req, res, next) =>{
    console.log("session", req.session)

    if (req.session.loggedIn){
        next();
    } else{
        res.status(401).jsson({message: "You Cannot Pass"})
    }
}