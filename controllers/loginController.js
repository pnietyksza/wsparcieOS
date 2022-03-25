var mysql = require('mysql');
var connection = mysql.createConnection({
    host :     'localhost',
    user :     'root',
    password : '',
    database : 'baza_danych_pod_wsparcieos'
  });

exports.logincontroller =( req, res )=>{
    res.render('login');
};

exports.logincontrollerPost = ( req, res )=>{
    var username = req.body.username;
    var password = req.body.password;
    var query = 'SELECT * FROM `uzytkownik` WHERE `nazwa_uzytkownika` = "'+username+'" AND `haslo` = "'+password+'";';
    connection.query(query, function(error, results, fields){
        if(results.length > 0){
            req.session.loggedin = true;
            req.session.username = username;
            res.redirect('/home');
        }else{
            res.send('Proszę wprowadzić prawidłowe dane logowania');
        }
        res.end();
    });
}

exports.logincontrollerHome = ( req, res ) => {
    res.render('menu');
}

exports.logoutcontroller = ( req, res )=>{
    req.session.loggedin = false;
    req.session.username = undefined;
    res.redirect('/');

    

}
