const User = require("../model/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middlewares/catchAsyncError");

exports.newUser = catchAsyncError(async (req, res, next) => {
    const user = await User.create(req.body);
    // console.log(req.body)

    res.status(201).json({
        success: true,
        user,
    });
});

exports.userLogin = catchAsyncError(async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({ email: email, password: password });
    // console.log(req.body)
    if (user) {
        res.status(201).send({
            user
            
        });
    }else{
        res.status(404).send({
            success: false,
            message: "user not found"
        })
    }
});
