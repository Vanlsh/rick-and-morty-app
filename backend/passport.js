import FacebookStrategy from 'passport-facebook'
import passport from 'passport'

const FACEBOOK_APP_ID = ''
const FACEBOOK_APP_SECRET = ''


passport.use(new FacebookStrategy({
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));