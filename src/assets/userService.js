const logger = require("pino")();
const uuid = require('uuid');
const async = require('async');
const generalConfig = require("../Configuration/generalConfig.json");
const commonResponse = require("../Common/commonResponse");
const common = require("../Common/common");
const userQuery = require("../Configuration/userQuery.json");
const mysqlConnection = common.createConnectionToMariaDB(true, generalConfig.mariaDb.DBthreads);


module.exports = {


  lavoro : function (req) {
    return new Promise(function (resolve, reject) {
                connection.query(query.nuovoLavoro, [req.body.titolo, req.body.descrizione, req.body.autore], function (err, res) {
                    if (err) {
                       return reject(err);
                      }
                      res.console.log("1 record inserted into annunci di lavoro");

                    }
                );
            });

},
}
