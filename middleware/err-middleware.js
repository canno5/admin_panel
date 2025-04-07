const errMiddleware = (err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || 'Backend Error';
    const extraDetailt = err.extraDetailt || 'Backend Error From Server';
    // next();  
    return res.status(status).json({message, extraDetailt});
    // next();

}
module.exports = errMiddleware