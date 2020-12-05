var express = require('express');
var router = express.Router();
/* サンプルAPI-1
 * http://localhost:3000/ck_get にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/', function(req, res, next) {
  var param = {"値":"これはサンプルGet APIです"};
  res.header('Content-Type', 'application/json; charset=utf-8')

  setTimeout(function(){

  res.send(param);

  }, 115000);

});

/* サンプルAPI-2
 * http://localhost:3000/ck_get/test にGETメソッドのリクエストを投げると、
 * JSON形式で文字列を返す。
 */
router.get('/test', function(req, res, next) {
  var param = {"値":"これはTest APIです"};
  res.header('Content-Type', 'application/json; charset=utf-8')
  setTimeout(function(){


  res.send(param);


  }, 115000);

});

module.exports = router;

