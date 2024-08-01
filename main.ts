//              Type Intersection
type Student = {
    studentName : string,
    studentId : number
}
type teacher = {
    teacherName: string,
    teacherId: number
}
let classRoom : Student & teacher = {
    studentName: "bushra",
    studentId: 459,
    teacherName:"Ali jawwad",
    teacherId:269
}
console.log(classRoom)
//                             interface
//  interface can only be used with objects although type alias can also be used with string,boolean,no.,
// functions and objects.
interface Manager {
    managerName: string
}
interface Employee {
    employeeName: string
}
let company_Persons: Manager & Employee = {
    managerName:"Ammar",
    employeeName:"louisa"
}
console.log(company_Persons)






