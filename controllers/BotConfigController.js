
const db = require("../models");
const BotConfigs = db.BotConfigs;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
    BotConfigs.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the BotConfigs."
      });
    });
};

exports.findAll = (req, res) => {
    console.log("test1");
    console.log(BotConfigs);
    BotConfigs.findAll()
    .then(data => {
      console.log("test2");
      console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving BotConfigs."
      });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    BotConfigs.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving BotConfigs with id=" + id
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;

    BotConfigs.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "BotConfigs was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update BotConfigs with id=${id}. Maybe BotConfigs was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating BotConfigs with id=" + id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    BotConfigs.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "BotConfigs was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete BotConfigs with id=${id}. Maybe BotConfigs was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete BotConfigs with id=" + id
        });
      });
};

exports.deleteAll = (req, res) => {
    BotConfigs.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} BotConfigs were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all BotConfigs."
          });
        });
};

exports.findAllCondition = (req, res) => {
    BotConfigs.findAll({ where: { id: 1 } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving BotConfigs."
      });
    });
};