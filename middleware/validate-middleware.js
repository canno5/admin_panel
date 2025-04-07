const validate = (schema)=> async (req,res,next)=>{
    try {
        const parseBody = schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        // console.log(err);
        const status = 422;
        const message = "Fill input Field Properly";
        const extraDetailt = err.errors[0].message;
        const errObj  = {status, message, extraDetailt};
        // console.log(errObj);
        next(errObj);
    }

}
module.exports = validate;