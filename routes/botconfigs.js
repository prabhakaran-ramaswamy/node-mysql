module.exports = app => {
  const BotConfigs = require("../controllers/BotConfigController");

  var router = require("express").Router();

  router.post("/", BotConfigs.create);

  router.get("/", BotConfigs.findAll);

  router.get("/:id", BotConfigs.findOne);

  router.put("/:id", BotConfigs.update);

  router.delete("/:id", BotConfigs.delete);

  app.use('/api/botconfigs', router);
};