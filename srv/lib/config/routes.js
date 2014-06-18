/*jshint node:true, es3:false*/
/**
 * Created by csharon on 6/18/14.
 */

module.exports = function (app, config) {

  app.get('*', function (req, res) {
    res.sendfile(config.webRoot.concat('/index.html'));
  });

};