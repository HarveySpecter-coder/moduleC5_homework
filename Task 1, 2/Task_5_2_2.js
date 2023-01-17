const jsonString = `{
    "list": [
    {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
    },
    {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
    }
]
}`;

const data = JSON.parse(jsonString);
const students = data.list;
const studentsArr = [];

for(let i in students){
    const res = {
        name: students[i].name,
        age: Number(students[i].age),
        prof: students[i].prof,
    }
    studentsArr.push(res);
}
const result = {
    list: studentsArr,
}
console.log(result);