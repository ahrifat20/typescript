// Topic: Typescript,
// Date: 14/07/20221,
// Author: Akbor Hossain Rifat

// ***All Valid Javscript is Valid Typescript, But All valid Typescript is not Valid Javscript.


// Basic Data Type: {
//   Any, number, string, boolean, object, Array, Tuple, 
//   Enum, undefined, null, void, never, unknown,Function
// };

//any type
let anyType: any = "This is a string";
anyType = 12;

//number type
const numberType: number = 12;

//string type
const stringType: string = "This is String Type";

//boolean type
const booleanType: boolean = false;

//Type aliases
type typeName = string | number | string[];// | it;s called union

let typeAlias: typeName;
typeAlias = ["apple", "orange"];
// console.log(typeAlias);

//array
const fruits: string[] = [];
fruits.push("Apple", "Orange");
// console.log(fruits);

//mixed arrray
const mixed: (string | number | boolean)[] = [];
mixed.push("Apple", 200, true);
// console.log(mixed);

//littarrel direction
type direction = 'left' | 'right' | 'top' | 'bottom';
let gameDirection: direction = "right" 

//Interfaces
interface Person {
    name: string;
    age: number;
    hobby?: string;//this item is optional.
    readonly work: string;//this item is readonly.
    familyMember?: {
        [key: string]: string//this item is dynamic key
    }
};

//object with interface
let person: Person  = {
    name: "Solaiman Shadin",
    age: 12,
    hobby: "Sleeping",
    work: "Programming",
    familyMember: {
        mother: "Shilpi Begum"
    }
};
person.name = "Akbor Hossain Rifat"
// console.log(person);

//array with interface
interface Student {
    readonly schoolName: string;
    name: string;
    age: number;
    class: string;
    roll: number;
    studentType?: string;
    subjectWithMarks: {
        bangla: number,
        english: number
    };
    familyMembers: string[];
};

const student: Student[] =[
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
        familyMembers:  ["Mother", "Father", "Brother"]
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
        familyMembers:  ["Mother", "Father", "Brother"]
    }
];
// console.log(student);

//object with type
let students: {
    name: string,
    age: number,
    sex: string,
    hobby?: string
};

students = {
    name: "Akbor Hossain Rifat",
    age: 19,
    sex: "Male",
    hobby: "Coding"
};
// console.log(students);

//function with type
let func: Function;
func = () => {
    // console.log("This is Function");
};
func();

//function with signature
let funcSignature: (x: string, y: string, z: number) => string;
//if i don't return any value then i can assign void

funcSignature = (name: string, cls: string, old: number) => {
    return `My name is ${name}. I read in ${cls}. I am ${old} years old`;
};
const result: string = funcSignature("Akbor Hossain Rifat", "CSE", 19);
// console.log(result);

// Generic
const dynamicArr = <T>(arr: T[]): T[] => {
    return arr;
};
dynamicArr<string>(["a","b"]);

interface ApiRespons <T>{
    status: number;
    type: string;
    data: T
};

const apiResponse1: ApiRespons<string> = {
    status: 200,
    type: "SUCCESS",
    data: "string"
};

//class with type.
class Player {
    name: string;
    age: number;
    country: string;

    constructor(name: string, age: number, country: string) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
};

const playerSakib = new Player("Sakib Al Hasan", 29, "Bangladesh");
const playerMashrafee = new Player("Mashrafee", 29, "Bangladesh");

console.log(playerSakib.name)//I can access from outside the class

//I don't want access from outside the class. So, I can use Access Modifire in this class
class Teacher {
    readonly name: string;
    private age: number;
    private phoneNumber: string;
    readonly subject: string;

    constructor(name: string, age: number, phN: string, sub: string) {
        this.name = name;
        this.age = age;
        this.phoneNumber = phN;
        this.subject = sub;
    }
};
//or
class Teachers {
    constructor(
        readonly name: string,
        private age: number,
        private phoneNumber: string,
        readonly subject: string
    ) {}
};

const teacher1 = new Teacher("Munni Mam", 22, "01631187020", "Electrical");
const teacher = new Teacher("SIPI Mam", 22, "01631187020", "Electrical");
console.log(teacher1.name)//I can access readonly value, but I can't reassign value and I can't access private value.
console.log(teacher.name)

//enum
enum Month {Jan, Feb, Mar, April, May, June, July, Aug, Sep, Oct, Nov, Dec};
interface Birthday {
    name: string;
    day: number;
    month: Month;
    year: number
};
const birthdayBoy: Birthday = {
    name:"Akbor",
    day: 30,
    month: Month.July,
    year: 2002
};
// console.log(birthdayBoy);

//Tuples
let tupleArr: [string, number, boolean];
tupleArr = ["Akbor", 19, true];
console.log(tupleArr);


console.log("Typescript Practice");


