const dbconnection = require('../../config/dbconnection');

module.exports= function (app) {
  app.get('/noticias', function(req, res){
    const conn = dbconnection();
    const sql = 'select * from noticias';
    conn.query(sql, function(err, result){
      res.render("noticias/noticias", {noticias: result})
    });
  });
};