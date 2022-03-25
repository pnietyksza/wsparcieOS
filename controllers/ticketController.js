var mysql = require('mysql');
var connection = mysql.createConnection({
    host :     'localhost',
    user :     'root',
    password : '',
    database : 'baza_danych_pod_wsparcieos'
  });

exports.ticketcontroller= (req, res) => {
    if(req.session.username == undefined){
        res.redirect('/');
    }
    res.render('ticket');
};
exports.ticketcontrollerPost = (req, res) => {
    //techniczny czy obsługa klienta
    var typproblemu = req.body.problem;
    var tytulzgloszenia = req.body.tytulzgloszenia;
    var opis = req.body.opiszgloszenia;
    var kategoria = req.body.kategoria;
    var producenci = req.body.producenci;
    var modele = req.body.modele;
    //kto zglasza
    var kto = req.session.username;
    var queryForUserInfo = 'SELECT `id` FROM `uzytkownik` WHERE `nazwa_uzytkownika` = "'+kto+'";';
    connection.query(queryForUserInfo, (error, results, fields)=>{
        if(results.length > 0){
            console.log(typeof results);
            res.send(results);

        }
    });


    
}