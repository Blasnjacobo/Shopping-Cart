const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const { User } = require("./models/userSchema");
const Cart = require("./models/cartSchema");
require("dotenv").config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        "https://shopping-cart-production-4ea1.up.railway.app/auth/google/callback",
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        // Check if user already exists in the database
        let user = await User.findOne({ id: profile.id });
        let cart = await Cart.findOne({ username: profile.username });
        if (user) {
          // If user already exists, return it
          console.log("User already created", user);
          return done(null, { user: user, cart: cart });
        } else {
          // Create a new user in the database
          const newUser = new User({
            id: profile.id,
            name: profile.name.givenName,
            username: profile.emails[0].value,
            photos: [{ value: profile.photos[0].value }],
            provider: profile.provider,
          });
          await newUser.save();
          // Create a new cart for the user
          const newCart = new Cart({
            userID: newUser.id,
            name: profile.name.givenName,
            username: profile.emails[0].value,
            items: [],
          });
          await newCart.save();
          console.log("User and Cart created");
          return done(null, { user: newUser, cart: newCart });
        }
      } catch (error) {
        console.log("callback error");
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
        let user = await User.findOne({ username: profile.username });
        let cart = await Cart.findOne({ username: profile.username });
        if (user) {
          return done(null, { user: user, cart: cart });
        } else {
          const newUser = new User({
            id: profile.id.toString(),
            name: profile.displayName,
            username: profile.username,
            photos: [{ value: profile.photos[0].value }],
            provider: profile.provider,
          });
          await newUser.save();
          const newCart = new Cart({
            userID: newUser.id,
            name: profile.displayName,
            username: profile.username,
            items: [],
          });
          await newCart.save();
          return done(null, { user: newUser, cart: newCart });
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
