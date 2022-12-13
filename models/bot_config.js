const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const BotConfigs = sequelize.define("bot_config", {
    title: {
      type: DataTypes.JSON, 
    },
    audio: {
      type: DataTypes.JSON, 
    },
    closeButton: {
      type: DataTypes.JSON, 
    },
    warning: {
      type: DataTypes.JSON,
    },
    welcome: {
      type: DataTypes.JSON,
    },
	  feedback: {
      type: DataTypes.JSON,
    },
    likeActions: {
      type: DataTypes.JSON,
    },
    moreMessage: {
      type: DataTypes.JSON,
    },
    chatInput: {
      type: DataTypes.JSON, 
    },
	  gridItem: {
      type: DataTypes.JSON,
    }
  });

  return BotConfigs;
};