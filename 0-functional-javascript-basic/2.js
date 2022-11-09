const log = console.log;

// 일급 함수
    // 함수를 값으로 다뤄질 수 있다. 
// 고차 함수
// 함수를 값으로 다루는 함수. 

// 1. 함수를 인자로 받아서 실행하는 함수 
const apply1 = f => f(1); // 함수를 받아서 안에서 실행 (고차함수)
const add2 = a => a + 2;
log(apply1(add2));
log(apply1(a => a-1));

const times = (f, n) => { // 함수를 인자로 받아서 인자를 적용하는 함수 (고차함수)
    let i = -1; 
    while(++i < n) f(i);
}
times(log, 3);
times(a => log(a+10), 3);

// 2. 함수를 만들어 리턴하는 함수(클로저를 만들어 리턴)
// 함수가 실행 되었을 때 함수를 리턴 
// 함수이자, a를 기억하는 클로저
// 클로저를 리턴하는 함수
const addMaker = a => b => a + b;
const add10 = addMaker(10); // 또다른 함수 생성
log(add10); // b => a + b
log(add10(5));
log(add10(10));