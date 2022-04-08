const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const process = require("process");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const https = require("https");
const http = require("http");
const userservice = require("userService.js");
const logger = require ("pino")();

//un'API REST utilizzerà una richiesta GET per richiamare un record, una richiesta POST per crearne una,
//una richiesta PUT per aggiornare un record e una richiesta DELETE per eliminarne una.
app.post('/lavoro', function (req, res) {
  logger.info("/lavoro ");
  userServices.lavoro(req).then(function (r) {
      res.json(r);
      }, function (err) {
      res.json(commonResponse.getResponse("IT", -1, err));
  });
});
