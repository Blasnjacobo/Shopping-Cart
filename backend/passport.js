const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const passport = require("passport");
const { User } = require('./models/userSchema')
require('dotenv').config()

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback"
    },
    async (request, accessToken, refreshToken, profile, done) => {
      console.log(profile)
      try {
        // Check if user already exists in the database
        let user = await User.findOne({ displayName: profile.displayName });
        if (user) {
          return done(null, user);
        } else {
          // Create a new user in the database
          const newUser = new User({
            displayName: profile.displayName,
            photos: [{ value: profile.photos[0].value }],
            provider: profile.provider,
            _raw: profile._raw
          });
          await newUser.save();
          return done(null, newUser);
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    async (request, accessToken, refreshToken, profile, done) => {
      console.log(profile)
      try {
        // Check if user already exists in the database
        let user = await User.findOne({ displayName: profile.displayName });
        if (user) {
          return done(null, user);
        } else {
          // Create a new user in the database
          const newUser = new User({
            displayName: profile.displayName,
            photos: [{ value: profile.photos[0].value }],
            provider: profile.provider,
            _raw: profile._raw
          });
          await newUser.save();
          return done(null, newUser);
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Configure JWT strategy
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}, (jwtPayload, done) => {
  // Here you would typically check if the user exists in your database
  // You might also perform additional validation on the JWT payload
  return done(null, jwtPayload.user);
}));


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});