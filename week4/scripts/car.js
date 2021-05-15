export class Car {
    constructor(make, model, year, color, mileage) {
        this.CarId = Date.now(),
        this.Make = make,
        this.Model = model,
        this.Year = year,
        this.Color = color,
        this.Mileage = mileage,
        this.Available = true
    }
}

