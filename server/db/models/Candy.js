/* eslint-disable quotes */
const Sequelize = require("sequelize");
const db = require("../database");

const Candy = db.define("candy", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10
    }
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue:
      "https://media4.s-nbcnews.com/j/newscms/2018_43/1379169/alejandra-ramos-candy-pinata-cake-snickers-banoffee-pie-today-square-181022-05_8e323d2265e4baa7a7441bf7d6dbf900.today-inline-large.jpg"
  }
});

module.exports = Candy;
