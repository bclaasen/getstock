var dateFormat = require('dateformat');
var kursparser = require('./kursparser3');

var displaynames = ['Sinnerschrader', 'DAX', 'VW Vorzüge', 'Snapchat', 'Telekom']
var items = ['sinnerschrader-aktie', 'dax-index', 'volkswagen_vz-aktie', 'snap-aktie', 'deutsche_telekom-aktie'];

var actions = items.map(kursparser.createKurs);

var results = Promise.all(actions);

results.then(function (data) {
    console.log("#############################################");
    var now = new Date();
    console.log(dateFormat(now, "dd.mm.yyyy HH:MM:ss"));
    console.log("#######################");

    data.forEach(printResult);
});

function printResult(item, index) {
    console.log(displaynames[index] + ': ' + item);
}
