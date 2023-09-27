import asyncHandler from 'express-async-handler'

//@desc Auth user/set token
//route POST api/user/auth
//@access Public

const authUser = asyncHandler( async (req, res) =>{
    res.status(404);
    throw new Error ('somthing w')
    res.status(200).json({Message: 'Auth User'})
});


export {
    authUser
};