var kursparser = require('./kursparser');
var dateFormat = require('dateformat');

doIt();

setInterval(function () {
    doIt();
}, 10 * 60 * 1000);

function doIt() {
    console.log("#############################################");
    var now = new Date();
    console.log(dateFormat(now, "dd.mm.yyyy HH:MM:ss"));
    console.log("#######################");
    kursparser.createKurs('sinnerschrader-aktie', 'SinnerSchrader');
    kursparser.createKurs('volkswagen_vz-aktie', 'VW Vorzüge');
    kursparser.createKurs('snap-aktie', 'Snapchat');
    kursparser.createKurs('dax-index', 'DAX');  
    kursparser.createKurs('deutsche_telekom-aktie', 'Telekom');  
    //kursparser.createKursAsync('dax-index', 'DAX');
    //kursparser.createKurs('dws_top_50_welt-fonds','DWS Top 50 Welt');
    //kursparser.createKurs('dws_technology_typ_o-fonds','DWS-Tech-Typ-O');
    //kursparser.createKurs('lacuna_adamant_gl._heal_t.p-fonds','Lacuna Adamant Gl. Heal T.P Fonds');
}
