module.exports = {
  index: function(req, res){
    res.render('index', {
      yes:"pass",
      no:"write_test"
    })
  },
  pass: function(req, res){
    res.render('pass')
  },
  refactor: function(req, res){
    res.render('refactor')
  },
  do_refactor: function(req, res){
    res.render('do_refactor')
  },
  new_feature: function(req, res){
    res.render('new_feature')
  },
  write_code: function(req, res){
    res.render('write_code')
  },
  write_test: function(req, res){
    res.render('write_test')
  }
}
