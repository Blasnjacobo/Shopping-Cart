const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const passport = require("passport");
const { User } = require('./models/userSchema')
const Cart = require('./models/cartSchema');
require('dotenv').config()

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback"
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        // Check if user already exists in the database
        let user = await User.findOne({ username: profile.username });
        let cart = await Cart.findOne({ username: profile.username });
        if (user) {
          // If user already exists, return it
          return done(null, {user: user, cart: cart});
        } else {
          // Create a new user in the database
          const newUser = new User({
            id: profile.id,
            name: profile.name.givenName,
            username: profile.emails[0].value,
            photos: [{ value: profile.photos[0].value }],
            provider: profile.provider
          });

          // Save the new user
          await newUser.save();

          // Create a new cart for the user
          const newCart = new Cart({
            userID: newUser,
            name: profile.name.givenName,
            username: profile.emails[0].value,
            items: []
          });

          // Save the new cart
          await newCart.save();

          // Return the new user and cart
          return done(null, {user: newUser, cart: newCart});
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
      try {
        // Check if user already exists in the database
        let user = await User.findOne({ username: profile.username });
        let cart = await Cart.findOne({ username: profile.username });
        if (user) {
          return done(null, {user: user, cart: cart});
        } else {
          // Create a new user in the database
          const newUser = new User({
            id: (profile.id).toString(),
            name: profile.displayName,
            username: profile.username,
            photos: [{ value: profile.photos[0].value }],
            provider: profile.provider
          });
          await newUser.save();

          const newCart = new Cart({
            userID: newUser,
            name: profile.displayName,
            username: profile.username,
            items: []
          });
          await newUser.save();
          await newCart.save();
          return done(null, {user: newUser, cart: newCart});
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
    // Retrieve user information from the JWT payload
  const userId = jwtPayload.id;
  User.findById(userId, (err, user) => {
    if (err) {
        return done(err, false); // Error handling
    }
    if (!user) {
        return done(null, false); // User not found
    }
    // Attach user information to the request object for use in subsequent middleware or route handlers
    // For example, you might want to attach the user object itself or just specific user attributes
    // Here, we're attaching the user object to the request as req.user
    req.user = user;
    return done(null, user); // Pass the user object to the next middleware or route handler
});
}));


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});