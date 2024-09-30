const User = require("../models/user");

module.exports.renderSignupPage = (req, res) => {
    // res.send("form");
    res.render("users/signup.ejs");
};

module.exports.signup = async (req, res) => {
    try{
        let {username, email, password} = req.body;
        const newUser = new User({username, email});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if (err) return next(err);

            req.flash("success", "Welcome to Wanderlust!");
            res.redirect("/listings");
        });
        // req.flash("success", "Welcome to Wanderlust!");
        // res.redirect("/listings");
    }
    catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginPage = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login = async(req, res) => {
    // res.send("Welcome to Wanderlust! You are logged in!");
    req.flash("success", "Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "listings";
    res.redirect(redirectUrl);  
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err) return next(err);

        req.flash("success", "you are logged out!");
        res.redirect("/listings");
    })
};

module.exports.privacy = (req, res) => {
    res.render("users/privacy.ejs");
};

module.exports.terms = (req, res) => {
    res.render("users/terms.ejs");
}