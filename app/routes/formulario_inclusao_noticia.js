module.exports= function (app) {
  app.get('/formulario_inclisao_noticia', function(req, res){
    res.render("admin/form_add_noticia")
  });
};