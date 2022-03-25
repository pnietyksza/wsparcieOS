var mysql = require('mysql');

var connection = mysql.createConnection({
    host :     'localhost',
    user :     'root',
    password : '',
    database : 'baza_danych_pod_wsparcieos'
  });



exports.homecontroller = (req,res, next) =>{
    if(req.session.username == undefined){
        res.redirect('/');
    }
    var user = req.session.username;
    var query = 'SELECT * FROM ticket WHERE `wlasciciel`="'+4+'"';

    connection.query(query,( error, results, fields )=>{
        if(error) throw error;
        res.render('home', {results});
    });
}

exports.testcontroller = ( req, res, next ) => {
    res.render('finder');
}
