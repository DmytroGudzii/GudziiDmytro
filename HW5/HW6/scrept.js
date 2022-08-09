class Human {
    constructor(height, weight, name, bYear, gender, disability) {
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.bYear = bYear;
        this.gender = gender;
        this.disability = disability;
    }

    get getInfo() {
        return {
            name: this.name,
            bYear: this.bYear,
            gender: this.gender,
            weight: this.weight,
            height: this.height,
            disability: this.disability
        }
    }

    get getHumanName() {
        console.log(`Привет! Меня зовут ${this.name}`)
    }

    set setDisability(disability) {
        this.disability = disability;
    }

    set setNewName(name) {
        this.name = name;
    }

}

const firstHuman = new Human('180', '70', 'John',
    new Date('1990.10.10'), 'male', false);
firstHuman.getInfo;
firstHuman.getHumanName;
// firstHuman.setNewName;
// firstHuman.setDisability;

class frontEndDeveloper extends Human {
    constructor(height, weight, name, bYear, gender, disability, start, company ) {
        super(height, weight, name, bYear, gender, disability);
        this.start = start;
        this.company = company;
    }

    get getFrontEndDeveloperNameStart() {
        console.log(`Привет! Меня зовут ${this.name}, я Фронтэнд разработчик работаю с ${this.start}`)
    }

    get getMoney() {
        let arr1 = 0;
        let allSalaryPerCareer = this.company.reduce((acc, el) => {
            acc = Math.abs(el.end.getTime() - el.start.getTime());
            acc = Math.floor((acc / (1000 * 60 * 60 * 25)) / 30);
            acc = acc * el.salaryPerMonth;
            arr1 += acc;
        }, 0);
        console.log(arr1);
    }

    myCompany(company) {
        let searchCompany = this.company.filter(obj => {
            return obj.companyName === company
        });
        console.log(searchCompany);
    }

    addCompany(obj) {
        this.company.push(obj);
        console.log(this.company);
    }



}

const frontEndDeveloperCareer = new frontEndDeveloper(
    155,
    55,
    'Elizabeth',
    new Date('1997-05-05'),
    'female',
    false,
    new Date('2017-05-05'),

    [{
    start: new Date('2017-05-05'),
    end: new Date('2019-09-05'),
    salaryPerMonth: 1000,
    position: 'junior',
    companyName: 'Oracle',
},
    {
        start: new Date('2019-10-05'),
        end: new Date('2022-05-10'),
        salaryPerMonth: 2000,
        position: 'middle',
        companyName: 'CHI Soft',
    },
        {
            start: new Date('2020-11-01'),
            end: new Date('2021-09-01'),
            salaryPerMonth: 1500,
            position: 'middle',
            companyName: 'SBU',

        }],);

console.log(frontEndDeveloperCareer.getInfo);
console.log(frontEndDeveloperCareer);
frontEndDeveloperCareer.getHumanName;
frontEndDeveloperCareer.getFrontEndDeveloperNameStart
frontEndDeveloperCareer.getMoney;
frontEndDeveloperCareer.myCompany();
frontEndDeveloperCareer.addCompany({
    start: new Date('2020-11-01'),
    end: new Date('2021-09-01'),
    salaryPerMonth: 1500,
    position: 'middle',
    companyName: 'SBU',
});

tool = ['кирка', 'топор'];

class builder extends Human {
    constructor(height, weight, name, bYear, gender, disability, tool, speed, location) {
        super(height, weight, name, bYear, gender, disability);

        this.speed = speed;
        this.tool = tool;
        this.location = location;
    }

    building(Area) {
        let workTime = Math.floor(this.speed * Area / 60);
        let sumHour = workTime % 24;
        let workDay = Math.floor(workTime / 24);
        let day = workDay % 7;
        let workWeek = Math.floor(day / 7);
        let week = workWeek % 4.3;
        let workMonth = Math.floor(workWeek / 4.3);
        let month = workMonth % 12;
        let workYear = Math.floor(workMonth / 12);
        if (workTime < 24) {
            console.log(`Работа займет ${workTime}`);
        } else if (workTime > 24 && workDay < 7) {
            console.log( `Работа займет ${workDay} дней и ${sumHour} часов`);
        } else if (workDay > 7 && workWeek < 4) {
            console.log( `Работа займет ${workWeek} недель ${day} дней и ${sumHour}`);
        } else if (workWeek > 4.3 && workMonth < 12) {
            console.log( `Работа займет ${month} месяцев ${week} недель ${day} дней ${sumHour} часов`)
        } else {
            console.log( `Работа займет ${workYear} лет ${month} месяцев ${week} недель ${day} дней ${sumHour} часов`)
        }

    }

}

const myBuilder = new builder('200', '100', 'Brandon', '1989-05-05', 'male', false,
    tool, 5);

console.log(myBuilder.getInfo);
myBuilder.building();
myBuilder.building(2000);











