import jwt from 'jsonwebtoken'

const authMiddleware = async(req,res,next)=>{
    const {token} = req.headers;
    if (!token) {
        return res.json({success:false,message:"Not Authorized Login Again"})
    }
    try {
        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);
        // console.log(tokenDecode);
        // console.log(req);
        //req.body= {};
        console.log(req.body);
        req.body.userId = tokenDecode.id;
        console.log(req.body);
        next()
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export default authMiddleware;