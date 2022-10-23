const KEYS ={
    employees:'employees',
    employeeId:'employeeId'
}

export const getDepartmentCollection = ()=>([
    { id: '1', title: 'Department of Computer Science & Engineering' },
    { id: '2', title: 'Kundanben Dinsha Patel Department of Information Technology' },
    { id: '3', title: 'U & P U Patel Department of Computer Engineering' },
    { id: '4', title: 'Others' },
])

export function insertEmployee(data) {
    let employees=getAllEmployees();
    data['id'] = generateEmployeeId()
    employees.push(data)
    localStorage.setItem(KEYS.employees,JSON.stringify(employees))
}

export function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, '0')
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
    localStorage.setItem(KEYS.employeeId, (++id).toString())
    return id;
}

export function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees));
}