const { Car } = require("../models");

class CarController {
  async save(req, res) {
    try {
      const { model, year, color } = req.body;

      const newCar = await Car.create({
        model,
        year,
        color,
        owner: req.userId,
        created_at: new Date(),
        updated_at: new Date(),
      });

      return res.json(newCar.toJSON());
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }

  async get(req, res) {
    try {
      const car = await Car.findOne({
        where: { id: req.params.carId },
      });

      if (!car) {
        return res.status(404).json({ message: "Car does not exist" });
      }

      return res.json(car.toJSON());
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }

  async delete(req, res) {
    try {
      const car = await Car.findOne({ where: { id: req.params.carId } });

      if (!car) {
        return res.status(404).json({ message: "User does not exist" });
      }

      await car.destroy();

      return res.json(car.toJSON());
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }

  async list(req, res) {
    try {
      const cars = await Car.findAll();

      return res.json(cars.map((u) => u.toJSON()));
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  }
}

module.exports = new CarController();
