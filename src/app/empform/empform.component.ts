import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-empform",
  templateUrl: "./empform.component.html",
  styleUrls: ["./empform.component.css"],
})
export class EmpformComponent implements OnInit {
  @Output() empEvent = new EventEmitter();

  employee: any;
  myData = [
    {
      name: "name1",
    },
    {
      name: "name2",
    },
    {
      name: "name3",
    },
    {
      name: "name4",
    },
    {
      name: "name5",
    },
    {
      name: "name6",
    },
    {
      name: "name7",
    },
    {
      name: "name8",
    },
    {
      name: "name9",
    },
    {
      name: "name10",
    },
  ];
  array1: any = [];
  array2: any = [];
  array3: any = [];
  count: number;
  public callMeForLength(): void {
    const dataLengthP = this.myData.length;
    this.count = 1;
    if (dataLengthP % 3 === 2) {
      this.array1 = this.myData.slice(0, this.count + 1);
      this.array2 = this.myData.slice(this.count + 1, 2 * this.count + 2);
      this.array3 = this.myData.slice(2 * this.count + 2, 3 * this.count + 2);
    } else if (dataLengthP % 3 === 0) {
      if (dataLengthP % 2 === 0) {
        if (dataLengthP / 2 > 2) {
          this.array1 = this.myData.slice(0, dataLengthP / 2 - 1);
          this.array2 = this.myData.slice(dataLengthP / 2 - 1, dataLengthP - 3);
          this.array3 = this.myData.slice(dataLengthP - 3, dataLengthP);
        } else {
          this.array1 = this.myData.slice(0, dataLengthP / 2);
          this.array2 = this.myData.slice(dataLengthP / 2, dataLengthP - 1);
          this.array3 = this.myData.slice(dataLengthP - 1, dataLengthP);
        }
      } else if (dataLengthP % 2 === 1) {
        this.array1 = this.myData.slice(0, Math.ceil(dataLengthP / 2) - 1);
        // console.log(Math.ceil(dataLengthP / 2) - 1);
        this.array2 = this.myData.slice(
          Math.ceil(dataLengthP / 2) - 1,
          dataLengthP - 1
        );
        this.array3 = this.myData.slice(dataLengthP - 1, dataLengthP + 1);
      }
    } else if (dataLengthP % 3 === 1) {
      if (dataLengthP % 2 === 0) {
        if (dataLengthP / 2 > 2) {
          this.array1 = this.myData.slice(0, dataLengthP / 2 - 1);
          this.array2 = this.myData.slice(dataLengthP / 2 - 1, dataLengthP - 3);
          this.array3 = this.myData.slice(dataLengthP - 3, dataLengthP);
        } else {
          this.array1 = this.myData.slice(0, dataLengthP / 2);
          this.array2 = this.myData.slice(dataLengthP / 2, dataLengthP - 1);
          this.array3 = this.myData.slice(dataLengthP - 1, dataLengthP);
        }
      } else if (dataLengthP % 2 === 1) {
        this.array1 = this.myData.slice(0, Math.ceil(dataLengthP / 2) - 1);
        console.log(Math.ceil(dataLengthP / 2) - 1);
        this.array2 = this.myData.slice(
          Math.ceil(dataLengthP / 2) - 1,
          dataLengthP - 2
        );
        this.array3 = this.myData.slice(dataLengthP - 2, dataLengthP + 1);
      }
    }
    // if (dataLengthP % 3 === 2) {
    //   this.array1 = this.myData.slice(0, this.count + 1);
    //   this.array2 = this.myData.slice(this.count + 1, 2 * this.count + 2);
    //   this.array3 = this.myData.slice(2 * this.count + 2, 3 * this.count + 2);
    // } else if (dataLengthP % 3 === 0) {
    //   this.array1 = this.myData.slice(0, this.count + 1);
    //   this.array2 = this.myData.slice(this.count + 1, 2 * this.count + 2);
    //   this.array3 = this.myData.slice(2 * this.count + 2, 3 * this.count + 3);
    // } else if (dataLengthP % 3 === 1) {
    //   this.array1 = this.myData.slice(0, this.count + 1);
    //   this.array2 = this.myData.slice(this.count + 1, 2 * this.count + 1);
    //   this.array3 = this.myData.slice(2 * this.count + 1, 2 * this.count + 2);
    // }
    // this.myData.forEach((element: any) => {
    //   console.log(element);
    //   if (dataLengthP % 3 === 2) {
    //     this.array3.push(element);
    //     console.log(this.array1);
    //   } else if (dataLengthP % 3 === 1) {
    //     this.array2.push(element);
    //     console.log(this.array2);
    //   } else {
    //     this.array1.push(element);
    //   }
    // });

    // for (let x = 0; x < this.myData.length; x++) {
    //   const dataLengthP = this.myData.length;
    //   // console.log(dataLengthP);
    //   console.log(this.myData[x]);
    //   if (dataLengthP % 3 == 0) {
    //     this.array1.push(this.myData[]);
    //     console.log(this.array1);
    //   } else if (dataLengthP % 3 == 1) {
    //     this.array2.push(this.myData[x + 1]);
    //     console.log(this.array2);
    //   }
    // }
  }

  constructor() {}

  ngOnInit() {
    this.callMeForLength();
  }

  subForm(empDetails) {
    this.employee = empDetails.value;
    this.empEvent.emit(this.employee);
  }
}
