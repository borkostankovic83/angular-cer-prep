export class Schedule {
    id: number = 0;
    year:number = 0;
    month: number = 0;
    day: number = 0;
    hour: number = 0;

    constructor(id: number, year: number, month: number, day: number, hour: number) {
        this.id = id;
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
      }
}


