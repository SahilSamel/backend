const router = express.Router();

router.post(
    "/login",
    async (req,res)=>{
        passport.authenticate
        (
            'local',
            {
                successRedirect: '/',
                failureRedirect: '/login',
                failureFlash: true
            }
        )(req, res, next);
        req.session.loggedin = true
    }
)

module.exports = router;