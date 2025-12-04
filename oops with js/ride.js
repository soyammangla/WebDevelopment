// Q6. Ride-Sharing Application

class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance <= 0 || isNaN(this.distance)) {
      throw new Error("Invalid distance");
    }
    return this.distance * 10;
  }
}

try {
  const t = new Trip("A", "B", 5);
  console.log("Fare:", t.calculateFare());
} catch (err) {
  console.log(err.message);
}

try {
  const t2 = new Trip("A", "B", -3);
  console.log(t2.calculateFare());
} catch (err) {
  console.log("Error:", err.message);
}
