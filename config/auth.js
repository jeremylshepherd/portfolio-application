
// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'githubAuth': {
		'clientID': process.env.GITHUB_KEY,
		'clientSecret': process.env.GITHUB_SECRET,
		'callbackURL': process.env.APP_URL + 'auth/github/callback'
	},

    'googleAuth' : {
        'clientID'         : process.env.GOOGLE_ID,
        'clientSecret'     : process.env.GOOGLE_SECRET,
        'callbackURL'      : process.env.APP_URL + 'auth/google/callback'
    }

};