var mysql = require('mysql');

var connection = mysql.createConnection({
    host :     'localhost',
    user :     'root',
    password : '',
    database : 'baza_danych_pod_wsparcieos'
  });

exports.registercontroller = ( req, res ) => {
    res.render('register');
};
exports.registercontrollerPost = ( req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var phone = req.body.phone;
    var nip = req.body.nip;
    var typ_uzytkownika = 'klient'

    if(nip.toString().length >= 10){
        console.log('nip prawidłowy');
        typ_uzytkownika = 'instalator';
        console.log(typ_uzytkownika);
    }
    else{
        console.log('nip prawidlowy');
        nip = null;
        console.log(typ_uzytkownika)
        console.log(nip)
    }
    var query = 'INSERT INTO `uzytkownik`( `nazwa_uzytkownika`, `haslo`, `email`, `numer_telefonu`, `typ_uzytkownika`, `nip`) VALUES ("'+username+'","'+password+'","'+email+'","'+phone+'","'+typ_uzytkownika+'","'+nip+'")';
    console.log(query);

    connection.query(query, function(error, results, fields){
        if(results.error === null){
            res.send('Wprowadzone dane są nieprawidłowe');
        }else{
            res.redirect('/');
        }
    });
} 