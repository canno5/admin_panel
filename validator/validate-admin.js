const {z} = require("zod");
const sigInSchema =  z.object({
    email: z.string({required_error: "Email is requireds"}).trim().min(3, {message: "Email must be atleast 3 chars"}).max(255, {message: "Email must not be more than 255 characters"}),
    password: z.string({required_error: "Password is require"}).trim().min(3, {message: "Password must be atleast 3 chars"}).max(1024, {message: "Password must be atleast 255 chars"})
});
module.exports = sigInSchema;