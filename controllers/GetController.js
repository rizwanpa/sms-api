const { data } = require("../models");
const { Op } = require("sequelize");

const getData = async (req, res) => {
  console.log(req.body,req.params, req.query);
  let request =  req.query;
  let where = {}
  if (request.start_date !== undefined && request.start_date !== "") {
    where = {
      ...where,
      start_date: {
        [Op.gte]: request.start_date
      }
    };
  }
  if (request.end_date !== undefined && request.end_date !== "") {
    where = {
      ...where,
      end_date: {
        [Op.lte]: request.end_date
      }
    };
  }
  try {
    let attributes = [
      "id",
      "city",
      "start_date",
      "end_date",
      "price",
      "status",
      "color"
    ];

    let polls = await data.findAll({
      attributes: attributes,
      where: where
    });

    return res.status(200).json(polls);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getData
};
