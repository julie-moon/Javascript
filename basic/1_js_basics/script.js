// console.log('Hello World');

var firstName = 'Moon';
var lastName = 'Julie';
var age = 27;
var fullAge = true; 

console.log(firstName);
console.log(fullAge);



// 형 변환
console.log(firstName + '' + age); // age가 string으로 자동 형 변환됨.

var job, isMarried;
job = 'Front-End Developer';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old. ' + 'Is she married? ' + isMarried);

// 
age = 'thirty seven';
job = 'Fullstack Developer';
// alert(firstName + ' is a ' + age + ' years old. ' + 'Is she married? ' + isMarried);



// 연산자
var year, ageJulie, ageNate, yearJulie, yearNate;
year = 2018;
ageJulie = 26;
ageNate = 32;

yearJulie = year - ageJulie;
yearNate = year - ageNate;

console.log(yearJulie);

var nateOlder = ageNate > ageJulie;
console.log(nateOlder);

// typeof : 변수의 타입을 알려줌
console.log(typeof nateOlder); 
console.log(typeof ageJulie);
console.log(typeof 'Nate is older than Julie.');
var test; 
console.log(typeof test);



//
var now = 2018;
fullAge = 18;
var isFullAge = now - yearJulie >= fullAge;
console.log('Is her age over full age? ' + isFullAge);
var average = (ageJulie + ageNate) / 2
console.log(average);



// Mission 1
var markMass = 72;
var markHeight = 1.82;

var johnMass = 98;
var johnHeight = 1.93;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

console.log('markBMI : ' + markBMI);
console.log('johnBMI : ' + johnBMI);

var higherBMI = markBMI > johnBMI;
console.log(higherBMI);

console.log('Is Mark\'s BMI higher than John\'s? ' + higherBMI);



// 조건문
var nate = 'Nate';

if(ageNate < 13) {
    console.log(nate + ' is a boy.');
} else if(13 <= ageNate && ageNate < 20) {
    console.log(nate + ' is a teenager.');
} else if(20 <= ageNate && ageNate < 30) {
    console.log(nate + ' is a young man.');
} else {
    console.log(nate + ' is a man.');
}

// 삼항 연산자
ageNate >= 19 ? console.log(nate + ' can drink everything.') : console.log(nate + 'can drink non-alcoholic drinks.');

job = 'Front-End Developer';
switch(job) {
    case 'Designer' : 
        console.log(nate + ' designs beautiful websites.');
        break;
    case 'Front-End Developer' :
        console.log(nate + ' makes components that are rendered on client\'s browsers.');
        break;
    case 'Fullstack Developer' :
        console.log(nate + ' can make everything. He has amazing ablities-!');
        break;
    default :
        console.log(nate + ' does something else.');
}

switch(ageNate) {
    case ageNate < 13 :
        console.log(nate + ' is a boy.');
        break;
    case 13 <= ageNate && ageNate < 20 :
        console.log(nate + ' is a teenager.');
        break;
    case 20 <= ageNate && ageNate < 30 :
        console.log(nate + ' is a young man.');
        break;
    default : console.log(nate + ' is a man.');
}

/*
    falsy values : undefined, null, 0, '', NaN
    truthy values : Not falsy values.
*/
var height;
height = 160;

if(height) {
    console.log('Variable is defined.');
} else {
    console.log('Variables has not been defined.');
}

if(height == '160') { // 160을 형 변환(문자 -> 숫자) 함. 
    console.log('The == operator does type coercion-!');
}

if(height === '160') { // 예상하지 못한 오류를 잡을 수 있음.
    console.log('The == operator does type coercion-!');
}

// Mission 2 
var teamJohnScore = (89 + 120 + 103) / 3;
var teamMikeScore = (116 + 94 + 123) / 3;
var teamMaryScore = (97 + 134 + 105) / 3;

if(teamJohnScore > teamMikeScore && teamJohnScore > teamMaryScore) {
    console.log('John\'s team won with ' + teamJohnScore + ' points!');
} else if(teamMikeScore > teamJohnScore && teamMikeScore > teamMaryScore) {
    console.log('Mike\'s team won with ' + teamMikeScore + ' points!');
} else if(teamMaryScore > teamMikeScore && teamMaryScore > teamJohnScore) {
    console.log('Mary\'s team won with ' + teamMaryScore + ' points!');
} else {
    console.log('There is a draw');
}



// 함수
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageSerina = calculateAge(1990);
console.log(ageSerina);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if(retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1992, firstName);

var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'Designer' : 
            return firstName + ' designs beautiful websites.';
        case 'Front-End Developer' :
            return firstName + ' makes components that are rendered on client\'s browsers.';
        case 'Fullstack Developer' :
            return firstName + ' can make everything. He has amazing ablities-!';
        default : firstName + ' does something else.'
    }
}

console.log(whatDoYouDo('Front-End Developer', firstName));



// 배열
var names = ['Julie', 'Daniel', 'lenny'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

names[1] = 'Britta';
names[5] = 'Crystal';
console.log(names);

var julie = ['Julie', 'Moon', 1992, 'Front-End Developer'];
julie.push('mint'); // 배열 마지막 요소로 추가됨
julie.unshift('Ms.'); // 배열 첫 번째 요소로 추가됨
console.log(julie);

julie.pop(); // 배열 마지막 요소부터 제거됨
julie.shift(); // 배열 첫 번째 요소부터 제거됨
console.log(julie);

console.log(julie.indexOf(1992)); // 인자의 위치를 리턴. 
console.log(julie.indexOf(19)); // 배열에 없는 값을 인자로 넘기면 결과는 -1

var isDesigner = julie.indexOf('designer') === -1 ? 'Julie is not a designer' : 'Julie is a designer';
console.log(isDesigner);



// Mission 3
function calculateTips(bill) {
    if(bill < 50) {
        return bill * 1.2;
    } else if(50 <= bill && bill < 200) {
        return bill * 1.15;
    } else if(200 <= bill) {
        return bill * 1.1;
    }
}

var tips = [124, 48, 268];
var finalPaidAmounts = new Array();
for(var i=0; i< tips.length; i++) {
    finalPaidAmounts[i] = calculateTips(tips[i]);
}
console.log(finalPaidAmounts);



// 객체 & 메소드
var moon = { // 객체 리터럴로 생성
    firstName : 'Julie',
    lastName : 'Moon',
    birthYear : 1992,
    favFood : ['pizza', 'hamburgers', 'spaghetti', 'salad'],
    job : 'Front-End Developer',
    isMarried : false,
    calcAge : function() {
    return 2018 - this.birthYear; // this는 현재 객체인 moon을 의미함
    // this.age = 2018 - this.birthYear;
}
};
console.log(moon);

console.log(moon.firstName);
console.log(moon['job']);

var moonBirthDate = 'birthDate';
console.log(moon[moonBirthDate]);

moon.job = 'Back-End Developer';
moon['isMarried'] = true;
console.log(moon);

// 메소드 호출 응용
moon.age = moon.calcAge();
console.log(moon);

var jane = new Object(); // new Obect로 생성
jane.firstName = 'Jane';
jane.birthYear = 1935;
jane['lastName'] = 'Smith';
console.log(jane);



// Mission 4
var john = {
    fullName : 'John Smith',
    mass : 65,
    height : 1.82,
    calcBMI : function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
var mark = {
    fullName : 'Mark Miller',
    mass : 98,
    height : 1.93,
    calcBMI : function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if(john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else if (mark.bmi === john.bmi) {
    console.log('They have the same BMI.')
}



// 반복문
for(var i = 1; i <= 10; i++) {
    console.log(i);
}
// for문
for(var i = 0; i < julie.length; i++) {
    console.log(julie[i]);
}

for (var i = julie.length - 1; i > -1; i--) {
    console.log(julie[i]);
}

// while문
var i = 0
while(i < julie.length) {
    console.log(julie[i]);
    i++;
}

for(var i = 0; i < julie.length; i++) {
    if(typeof julie[i] !== 'string') { continue };
    console.log(julie[i]); // julie 배열에서 string을 가진 요소들만 모두 출력
}

for(var i = 0; i < julie.length; i++) {
    if(typeof julie[i] !== 'string') { break };
    console.log(julie[i]); // julie 배열에서 string이 아닌 요소를 만나면 반복문 빠져나옴
}



// Mission 5
var johnTips = {
    fullName : 'John Smith',
    billValues : [124, 48, 268, 180, 42],
    // tipsArr : [],
    // finalPaidAmounts : [],
    calcTips : function() {
        this.tipsArr = [];
        this.finalPaidAmounts = [];
        
        for(var i = 0; i < this.billValues.length; i++) { 
            var percentage;
            var bill = this.billValues[i];
            
            if(bill < 50) {
                percentage = .2;
            } else if(50 <= bill && bill < 200) {
                percentage = .15;
            } else if(200 <= bill) {
                percentage = .1;
            } // if ~ else   
            
            this.tipsArr[i] = bill * percentage;
            this.finalPaidAmounts[i] = bill + this.tipsArr[i];
        } // for end
    } // function calculateTips
}

var markTips = {
    fullName : 'Mark Miller',
    billValues : [77, 375, 110, 45],
    // tipsArr : [],
    // finalPaidAmounts : [],
    calcTips : function() {
        this.tipsArr = [];
        this.finalPaidAmounts = [];
        
        for(var i = 0; i < this.billValues.length; i++) {
            var percentage;
            var bill = this.billValues[i];
            
            if(bill < 100) {
                percentage = .2;
            } else if(100 <= bill && bill < 300) {
                percentage = .1;
            } else if(300 <= bill) {
                percentage = .25;          
            }// if ~ else
            
            this.tipsArr[i] = bill * percentage;
            this.finalPaidAmounts[i] = bill + this.tipsArr[i];
        } // for end
    } // function calculateTips
}

function calcAvg(tips) {
    var sum = 0;
    for(var i = 0; i < tips.length; i++) {
        sum += tips[i];
    }
    return sum / tips.length;
}

johnTips.calcTips();
markTips.calcTips();

johnTips.average = calcAvg(johnTips.tipsArr);
markTips.average = calcAvg(markTips.tipsArr);
console.log(johnTips, markTips);

if(johnTips.average > markTips.average) {
    console.log(johnTips.fullName + '\'s family pays higher tips, with an average of $' + johnTips.average);
} else {
    console.log(markTips.fullName + '\'s family pays higher tips, with an average of $' + markTips.average);
}