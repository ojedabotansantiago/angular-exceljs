import { Component, AfterViewInit, ElementRef, ViewChild } from "@angular/core";
import * as jexcel from "jexcel";

@Component({
  selector: "app-table-xls",
  templateUrl: "./table-xls.component.html",
  styleUrls: ["./table-xls.component.css"]
})
export class TableXlsComponent implements AfterViewInit {
  @ViewChild("sheet", { static: true }) sheet: ElementRef;

  data = [
    [2007, 1, "Volkswagen ", "Volkswagen Passat", 1267, 10],
    [2007, 1, "Toyota ", "Toyota Rav4", 819, 6.5],
    [2007, 1, "Toyota ", "Toyota Avensis", 787, 6.2],
    [2007, 1, "Volkswagen ", "Volkswagen Golf", 720, 5.7],
    [2007, 1, "Toyota ", "Toyota Corolla", 691, 5.4],
    [2007, 1, "Peugeot ", "Peugeot 307", 481, 3.8],
    [2008, 1, "Toyota ", "Toyota Prius", 217, 2.2],
    [2008, 1, "Skoda ", "Skoda Octavia", 216, 2.2],
    [2008, 1, "Peugeot ", "Peugeot 308", 135, 1.4],
    [2008, 2, "Ford ", "Ford Mondeo", 624, 5.9],
    [2008, 2, "Volkswagen ", "Volkswagen Passat", 551, 5.2],
    [2008, 2, "Volkswagen ", "Volkswagen Golf", 488, 4.6],
    [2008, 2, "Volvo ", "Volvo V70", 392, 3.7],
    [2008, 2, "Toyota ", "Toyota Auris", 342, 3.2],
    [2008, 2, "Volkswagen ", "Volkswagen Tiguan", 340, 3.2],
    [2008, 2, "Toyota ", "Toyota Avensis", 315, 3],
    [2008, 2, "Nissan ", "Nissan Qashqai", 272, 2.6],
    [2008, 2, "Nissan ", "Nissan X-Trail", 271, 2.6],
    [2008, 2, "Mitsubishi ", "Mitsubishi Outlander", 257, 2.4],
    [2008, 2, "Toyota ", "Toyota Rav4", 250, 2.4],
    [2008, 2, "Ford ", "Ford Focus", 235, 2.2],
    [2008, 2, "Skoda ", "Skoda Octavia", 225, 2.1],
    [2008, 2, "Toyota ", "Toyota Yaris", 222, 2.1],
    [2008, 2, "Honda ", "Honda CR-V", 219, 2.1],
    [2008, 2, "Audi ", "Audi A4", 200, 1.9],
    [2008, 2, "BMW ", "BMW 3-serie", 184, 1.7],
    [2008, 2, "Toyota ", "Toyota Prius", 165, 1.6],
    [2008, 2, "Peugeot ", "Peugeot 207", 144, 1.4]
  ];
  dataOptions = [
    "Alfa Romeo",
    "Audi",
    "Bmw",
    "Chevrolet",
    "Chrystler",
    "Dodge",
    "Ferrari",
    "Fiat",
    "Ford",
    "Honda",
    "Hyundai",
    "Jaguar",
    "Jeep",
    "Kia",
    "Mazda",
    "Mercedez-Benz",
    "Mitsubish",
    "Nissan",
    "Peugeot",
    "Porsche",
    "Subaru",
    "Suzuki",
    "Toyota",
    "Volkswagen"
  ];
  columOptions = [
    { type: "text", title: "Car", width: 120 },
    { type: "text", title: "Tipe", width: 120 },
    { type: "text", title: "Name one", width: 120 },
    { type: "text", title: "Name2", width: 120 },
    { type: "text", title: "CC", width: 120 },
    { type: "text", title: "CLL", width: 120 },
    { type: 'dropdown', title:'Make', width:200, source: this.dataOptions },
    { type: 'calendar', title:'Available', width:200 },
    /*{ type: 'calendar', title:'Available', width:200 },
    { type: 'image', title:'Photo', width:120 },
    { type: 'checkbox', title:'Stock', width:80 },
    { type: 'numeric', title:'Price', width:100, mask:'$ #.##,00', decimal:',' },
    { type: 'color', width:100, render:'square', }*/
  ];
  constructor() {}

  ngAfterViewInit() {
    jexcel.default(this.sheet.nativeElement, {
      data: this.data,
      columns: this.columOptions
    });
  }
}
