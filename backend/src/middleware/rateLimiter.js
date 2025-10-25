import ratelimit from "../config/upstash.js"

const rateLimiter = async (req, res, next) =>{
    try {
        const {success} = await ratelimit.limit("My-dummy-user");//You can use user id(req per user) or Req per IP
        if(!success) return res.status(429).json({message:" Tooo many Request, Try again later"});

        next();
    } catch (error) {
        console.log("Rate Limit Error!", error);
        next(error);
    }

}

export default rateLimiter