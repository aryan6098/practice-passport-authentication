module.exports.profile = function(req,res)
{
    return res.render('user_profile',
    {
        title: "user profile"
    });
    res.end('<h1>User Profile</h1>');
}