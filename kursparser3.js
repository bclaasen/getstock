var http = require("http");
var cheerio = require("cheerio");

exports.createKurs = function (kursname) {
    //console.log("kursname:"+kursname);
    return new Promise(resolve => getKurs(kursname, resolve));
}

function getKurs(kursname, resolve) {
    //console.log("kursname:"+kursname);
    //resolve ("aa"+kursname);
    var req_opts = {
        host: "www.ariva.de",
        path: "/" + kursname
    };

    var response_text = "";
    var kurs;

    // 1. Perform an HTTP request to clicktt
    var request = http.request(req_opts, function (resp) {

        resp.setEncoding("utf8");
        resp.on("data", function (chunk) {
            response_text += chunk;
        });
        resp.on("end", function () {
            //console.log(response_text);
            // 2. Parse response using cheerio
            //console.log(response_text);
            $ = cheerio.load(response_text);

            $(".snapshotQuotesBox").each(function (table_index, table) {
                $("span", table).first().each(function (table_index, table) {
                    kurs = $(this).text();
                    kurs = kurs.replace("\u20ac", "");
                    kurs = kurs.trim();
                    //console.log(displayname + ': ' + kurs);
                    resolve (kurs);
                });
            });
        });

    });


    request.on("error", function (e) {
        throw "Error: " + e.message;
    });

    request.end();
}