var verifier = require("email-verify");
var permute = require("email-permutator");

module.exports = function(context, cb) {
  var emails = permute(context.data);
  var verificationResults = [];
  emails.map(email => {
    var obj = {};
    verifier.verify(email, function(err, info) {
      if (err) cb(err);
      else {
        obj = {
          email: email,
          success: info.success,
          info: info
        };
        verificationResults.push(obj);
      }
    });
  });
  setInterval(function() {
    if (verificationResults.length == emails.length) {
      var filterEmails = verificationResults.map(obj => {
        if (obj.success) {
          return obj.email;
        }
        return null;
      });
      filterEmails = filterEmails.filter(email => email);
      cb(null, filterEmails);
    }
  }, 500);
};
