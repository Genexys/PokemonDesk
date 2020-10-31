// let tsStr = '1';
//
// let tsSum = (arr: number[]) => arr.reduce((a, b) => a + b);
//
// tsSum([1, 1]);
//

// const tsStr = '2';
// const tsNum = 2;

// const res = tsStr + tsNum;
// const res = +tsStr - tsNum;

// const strOrNumber: string | number = 'str';
//
// type StrOrNumber = string | number;
//
// const strOrNumber1: StrOrNumber = '123';
// const strOrNumber2: StrOrNumber = 123;
//
// type AllUnionTypeAlias = string | number | null | undefined | boolean | symbol | void | bigint | object | [];


// type TsArr = (number | string);
//
// const arr1: number[] = [1, 2, 3];
// const arr2: (number | string)[] = [1, '2', 3];
//
// const arr3: TsArr[] = [1, '2', 3];
// // эти записи идентичные
// const arr4: Array<TsArr> = [1, '2', 3];
//
// const tsNextArr: [string, number] = ['1', 2];
// const [a, b] = tsNextArr;


// const obj2: {name: string, birthDay: number} = {
//     name: 'Ilya',
//     birthDay: 22,
// }
//
// type Obj = {
//     name: string,
//     birthDay: number | string
//     male?: string
// };
// const obj1: Obj = {
//     name: 'Ilya',
//     birthDay: 22,
// }
//
// interface ObjInterface {
//     readonly name: string,
//     birthDay: number | string
//     male?: string
//     lastname: string
// }
// const obj3: ObjInterface = {
//     name: 'Ilya',
//     lastname: 'Ilya',
//     birthDay: 22,
// }
// obj3.name = 'Zar'
//
// interface  IndexInterface {
//     [n: string]: string
// }
//
// const data: IndexInterface = {
//     key1: 'key',
//     key2: 'key 1'
// }
// const val3 = data.key3


// enum MethodEnum {
//     add = 'add',
//     sub = 'sub',
//     div = 'div'
// }
//
// function calculate(method: MethodEnum, first: number, second: number):number {
//     switch (method) {
//         case MethodEnum.add: return first + second;
//         case MethodEnum.sub: return first - second;
//         case MethodEnum.div: return first / second;
//     }
// }
// calculate(MethodEnum.sub, 3, 5)
//
// type TypeFn = () => number;
// type TypeDefaultFn = () => void;
//
// const ArrowFunc:TypeDefaultFn = () => 2;


// function identity<T>(value: T): T {
//     return value;
// }
//
// identity(1);
// identity('2');

// interface MyArray<T> {
//     [n: number]: T;
//
//     map<U>(fn: (el: T) => U): U[];
// }
//
// const arr: Array<number> = [1, 2, 3, 4];
//
// arr.map((i) => i + 1);
// arr.map((i) => `${i} + 1`);
//
// function getLen<T extends Array<any>>(arr: T): number {
//     return arr.length;
// }

// getLen('123');
// getLen([1, 2, 3]);


function concat(str1: string, str2: string): string {
    return str1 + str2;
}
concat('Hello ', 'World');

type ArrType = (number | string)

interface MyInterface {
    howIDoIt: string,
    sameArray: ArrType[],
    withData: Array<DataInterface>,
}

interface DataInterface {
    howIDoIt: string,
    sameArray: ArrType[]
}

const MyHometask: MyInterface = {
    howIDoIt: "I Do It Wel",
    sameArray: ["string", "string two", 42],
    withData: [{ howIDoIt: "I Do It Well", sameArray: ["string one", 23] }]
}

interface MyArray<T> {
    [N: number]: T;

    reduce<U>(fn: (acc: T, cur: T) => T): U;
}

const arr: MyArray<number> = [1, 2, 3, 4];

arr.reduce((acc, curr) =>  acc + curr);
