"use strict";
// Topic: Typescript,
// Date: 14/07/20221,
// Author: Akbor Hossain Rifat
// ***All Valid Javscript is Valid Typescript, But All valid Typescript is not Valid Javscript.
// Basic Data Type: {
//   Any, number, string, boolean, object, Array, Tuple, 
//   Enum, undefined, null, void, never, unknown,Function
// };
//any type
var anyType = "This is a string";
anyType = 12;
//number type
var numberType = 12;
//string type
var stringType = "This is String Type";
//boolean type
var booleanType = false;
var typeAlias;
typeAlias = ["apple", "orange"];
// console.log(typeAlias);
//array
var fruits = [];
fruits.push("Apple", "Orange");
// console.log(fruits);
//mixed arrray
var mixed = [];
mixed.push("Apple", 200, true);
var gameDirection = "right";
;
//object with interface
var person = {
    name: "Solaiman Shadin",
    age: 12,
    hobby: "Sleeping",
    work: "Programming",
    familyMember: {
        mother: "Shilpi Begum"
    }
};
person.name = "Akbor Hossain Rifat";
;
var student = [
    {
        schoolName: "Sermon School ande College",
        name: "Akbor Hossain Rifat",
        age: 19,
        class: "CSE",
        roll: 711,
        studentType: "Brillient",
        subjectWithMarks: {
            bangla: 60,
            english: 45,
        },
        familyMembers: ["Mother", "Father", "Brother"]
    },
    {
        schoolName: "Sermon School ande College",
        name: "Liza Akter",
        age: 17,
        class: "Ten",
        roll: 12,
        studentType: "Brillient",
        subjectWithMarks: {
            bangla: 90,
            english: 85,
        },
        familyMembers: ["Mother", "Father", "Brother"]
    }
];
// console.log(student);
//object with type
var students;
students = {
    name: "Akbor Hossain Rifat",
    age: 19,
    sex: "Male",
    hobby: "Coding"
};
// console.log(students);
//function with type
var func;
func = function () {
    // console.log("This is Function");
};
func();
//function with signature
var funcSignature;
//if i don't return any value then i can assign void
funcSignature = function (name, cls, old) {
    return "My name is " + name + ". I read in " + cls + ". I am " + old + " years old";
};
var result = funcSignature("Akbor Hossain Rifat", "CSE", 19);
// console.log(result);
// Generic
var dynamicArr = function (arr) {
    return arr;
};
dynamicArr(["a", "b"]);
;
var apiResponse1 = {
    status: 200,
    type: "SUCCESS",
    data: "string"
};
//class with type.
var Player = /** @class */ (function () {
    function Player(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    return Player;
}());
;
var playerSakib = new Player("Sakib Al Hasan", 29, "Bangladesh");
var playerMashrafee = new Player("Mashrafee", 29, "Bangladesh");
console.log(playerSakib.name); //I can access from outside the class
//I don't want access from outside the class. So, I can use Access Modifire in this class
var Teacher = /** @class */ (function () {
    function Teacher(name, age, phN, sub) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phN;
        this.subject = sub;
    }
    return Teacher;
}());
;
//or
var Teachers = /** @class */ (function () {
    function Teachers(name, age, phoneNumber, subject) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.subject = subject;
    }
    return Teachers;
}());
;
var teacher1 = new Teacher("Munni Mam", 22, "01631187020", "Electrical");
var teacher = new Teacher("SIPI Mam", 22, "01631187020", "Electrical");
console.log(teacher1.name); //I can access readonly value, but I can't reassign value and I can't access private value.
console.log(teacher.name);
//enum
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["April"] = 3] = "April";
    Month[Month["May"] = 4] = "May";
    Month[Month["June"] = 5] = "June";
    Month[Month["July"] = 6] = "July";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
;
var birthdayBoy = {
    name: "Akbor",
    day: 30,
    month: Month.July,
    year: 2002
};
// console.log(birthdayBoy);
//Tuples
var tupleArr;
tupleArr = ["Akbor", 19, true];
console.log(tupleArr);
console.log("Typescript Practice");
