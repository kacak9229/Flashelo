const Authentication = require('./controllers/authentication');
const Main = require('./controllers/main');
const Account = require('./controllers/account');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {


  // Signin route
  app.post('/api/signin', requireSignin, Authentication.signin);
  // Signup route
  app.post('/api/signup', Authentication.signup);
  // Home categories
  app.get('/api/', requireAuth, Main.categories);
  // Item's category in [array]
  app.get('/api/items/:category', Main.itemsForCategory);
  // Profile
  app.get('/api/profile', requireAuth, Account.profile);
  // Settings
  app.get('/api/settings', requireAuth, Account.settings);
  // Buy Item (Use Stripe)

}
