// Данные работников(сотрудников)

const employees = [
    {id: "0.114152", name: "Иванов Александр Викторович"},
    {id: "1.112906", name: "Абрамов Евгений Анатольевич"},
    {id: "2.111409", name: "Хрулёв Иван Сергеевич"},
    {id: "3.112809", name: "Смирнов Ярослав Динисович"},
    {id: "4.112336", name: "Бондарев Павел Сергеевич"},
    {id: "5.111096", name: "Брежнева Вера Олеговна"},
    {id: "6.111123", name: "Тетеря Олег Анатольевич"},
    {id: "7.110321", name: "Иванов Артём"},
    {id: "8.110273", name: "Пилясов Виктор Евгеньевич"},
    {id: "9.110921", name: "Кучин Александр Сергеевич"},
    {id: "10.123431", name: "Трудобухова Ольга Олеговна"}
];

//Время прихода и ухода: in and out

const timeRecords = [
        //0
    {user_id: "0.114152", date: "2025-12-08", in: "8:55", out: "17:00" },
    {user_id: "0.114152", date: "2025-12-09", in: "8:55", out: "17:00" },
    {user_id: "0.114152", date: "2025-12-10", in: "8:55", out: "17:00" },
    {user_id: "0.114152", date: "2025-12-11", in: "8:55", out: "17:00" },
    {user_id: "0.114152", date: "2025-12-12", in: "8:55", out: "17:00" },
        //1
    {user_id: "1.112906", date: "2025-12-08", in: "8:55", out: "17:00" },
    {user_id: "1.112906", date: "2025-12-09", in: "9:00", out: "17:00" },
    {user_id: "1.112906", date: "2025-12-10", in: "8:49", out: "17:00" },
    {user_id: "1.112906", date: "2025-12-11", in: "8:40", out: "17:00" },
    {user_id: "1.112906", date: "2025-12-12", in: "9:30", out: "17:00" },
        //2
    {user_id: "2.111409", date: "2025-12-08", in: "10:50", out: "17:00" },
    {user_id: "2.111409", date: "2025-12-09", in: "9:02", out: "17:00" },
    {user_id: "2.111409", date: "2025-12-10", in: "9:00", out: "17:00" },
    {user_id: "2.111409", date: "2025-12-11", in: "11:06", out: "17:00" },
    {user_id: "2.111409", date: "2025-12-12", in: "11:32", out: "17:00" },
        //3
    {user_id: "3.112809", date: "2025-12-08", in: "8:55", out: "17:00" },
    {user_id: "3.112809", date: "2025-12-09", in: "8:55", out: "17:00" },
    {user_id: "3.112809", date: "2025-12-10", in: "8:55", out: "17:00" },
    {user_id: "3.112809", date: "2025-12-11", in: "8:55", out: "17:00" },
    {user_id: "3.112809", date: "2025-12-12", in: "8:55", out: "17:00" },
        //4
    {user_id: "4.112336", date: "2025-12-08", in: "9:00", out: "17:00" },
    {user_id: "4.112336", date: "2025-12-09", in: "9:00", out: "17:00" },
    {user_id: "4.112336", date: "2025-12-10", in: "10:00", out: "17:00" },
    {user_id: "4.112336", date: "2025-12-11", in: "8:50", out: "17:00" },
    {user_id: "4.112336", date: "2025-12-12", in: "8:41", out: "17:00" },
        //5
    {user_id: "5.111096", date: "2025-12-08", in: "8:55", out: "17:00" },
    {user_id: "5.111096", date: "2025-12-09", in: "8:55", out: "17:00" },
    {user_id: "5.111096", date: "2025-12-10", in: "8:55", out: "17:00" },
    {user_id: "5.111096", date: "2025-12-11", in: "8:55", out: "17:00" },
    {user_id: "5.111096", date: "2025-12-12", in: "8:55", out: "17:00" },
        //6
    {user_id: "6.111123", date: "2025-12-08", in: "8:55", out: "17:00" },
    {user_id: "6.111123", date: "2025-12-09", in: "8:55", out: "17:00" },
    {user_id: "6.111123", date: "2025-12-10", in: "8:55", out: "17:00" },
    {user_id: "6.111123", date: "2025-12-11", in: "8:55", out: "17:00" },
    {user_id: "6.111123", date: "2025-12-12", in: "8:55", out: "17:00" },
        //7
    {user_id: "7.110321", date: "2025-12-08", in: "8:55", out: "17:00" },
    {user_id: "7.110321", date: "2025-12-09", in: "8:55", out: "17:00" },
    {user_id: "7.110321", date: "2025-12-10", in: "8:55", out: "17:00" },
    {user_id: "7.110321", date: "2025-12-11", in: "8:55", out: "17:00" },
    {user_id: "7.110321", date: "2025-12-12", in: "8:55", out: "17:00" },
        //8
    {user_id: "8.110273", date: "2025-12-08", in: "8:55", out: "17:00" },
    {user_id: "8.110273", date: "2025-12-09", in: "8:55", out: "17:00" },
    {user_id: "8.110273", date: "2025-12-10", in: "8:55", out: "17:00" },
    {user_id: "8.110273", date: "2025-12-11", in: "8:55", out: "17:00" },
    {user_id: "8.110273", date: "2025-12-12", in: "8:55", out: "17:00" },
        //9
    {user_id: "9.110921", date: "2025-12-08", in: "8:55", out: "17:00" },
    {user_id: "9.110921", date: "2025-12-09", in: "8:55", out: "17:00" },
    {user_id: "9.110921", date: "2025-12-10", in: "8:55", out: "17:00" },
    {user_id: "9.110921", date: "2025-12-11", in: "8:55", out: "17:00" },
    {user_id: "9.110921", date: "2025-12-12", in: "8:55", out: "17:00" },
     //10
    {user_id: "10.123431", date: "2025-12-08", in: "8:55", out: "17:00"},
    {user_id: "10.123431", date: "2025-12-09", in: "8:55", out: "17:00"},
    {user_id: "10.123431", date: "2025-12-10", in: "8:55", out: "17:00"},
    {user_id: "10.123431", date: "2025-12-11", in: "8:55", out: "17:00"},
    {user_id: "10.123431", date: "2025-12-12", in: "8:55", out: "17:00"}
    //Расчёт окончен))
];


function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}


function isLate(arrivalTime) {
    const workStartTime = timeToMinutes("9:00");
    const arrivalInMinutes = timeToMinutes(arrivalTime);
    return arrivalInMinutes > workStartTime;
}


function getLateEmployees(startDate, endDate) {
    const lateEmployees = new Map(); 
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    timeRecords.forEach(record => {
        const recordDate = new Date(record.date);
        
        if (recordDate >= start && recordDate <= end) {
            if (isLate(record.in)) {

                // Вычисляем сотрудника по ID

                const employee = employees.find(emp => emp.id === record.user_id);
                if (employee) {

                    // Добавляем в Map с информацией об опозданиях

                    if (!lateEmployees.has(employee.id)) {
                        lateEmployees.set(employee.id, {
                            ...employee,
                            lateDays: []
                        });
                    }
                    
                    lateEmployees.get(employee.id).lateDays.push({
                        date: record.date,
                        arrivalTime: record.in
                    });
                }
            }
        }
    });
    
    // Преобразуем Map в массив

    return Array.from(lateEmployees.values());
}

// Функция для вывода результатов

function displayLateEmployees(lateEmployees) {
    if (lateEmployees.length === 0) {
        console.log("В указанный период никто не опаздывал.");
        return;
    }
    
    console.log("Сотрудники, опаздавшие в период с 8 по 12 декабря 2025 года:");
    console.log("=".repeat(60));
    
    lateEmployees.forEach(employee => {
        console.log(`\n${employee.name} (ID: ${employee.id}):`);
        console.log(`  Количество опозданий: ${employee.lateDays.length}`);
        console.log("  Дни опозданий:");
        
        employee.lateDays.forEach(day => {
            const minutesLate = timeToMinutes(day.arrivalTime) - timeToMinutes("9:00");
            console.log(`    - ${day.date}: пришёл в ${day.arrivalTime} (опоздание: ${minutesLate} мин.)`);
        });
    });
}

// Получаем опаздавших сотрудников с 8 по 12 декабря

const startDate = "2025-12-08";
const endDate = "2025-12-12";

const result = getLateEmployees(startDate, endDate); 

// Вывод результата

displayLateEmployees(result);