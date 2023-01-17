const XMLString = `
<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>`;

const parser = new DOMParser();
const XMLdom = parser.parseFromString(XMLString, 'text/xml');
const studentsNode = XMLdom.querySelectorAll('student');
const studentsList = [];

for (let i of Array(studentsNode.length).keys()){
    const studentNode = studentsNode[i].querySelector('name');
    const langAtr = studentNode.getAttribute('lang');
    const firstName = studentsNode[i].querySelector('first');
    const secondName = studentsNode[i].querySelector('second');
    const age = studentsNode[i].querySelector('age');
    const prof = studentsNode[i].querySelector('prof');
    const res = {
        name: firstName.textContent + ' ' + secondName.textContent,
        age: Number(age.textContent),
        prof: prof.textContent,
        lang: langAtr,
    };
    studentsList.push(res);
}
const result = {
    list:studentsList,
};

console.log(result);