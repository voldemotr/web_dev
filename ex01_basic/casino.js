// 초기 금액, 도전횟수 설정
// let 키워드를 사용해서 money, play 변수를 만들고 값을 각각 10000, 1으로 만들기
let money = ; 
let play = ;

// 이름 받기
// prompt()를 사용하여 이름을 입력 받을 name을 const를 통해 상수로 만듦
 name = prompt("이름을 입력해주세요!");

// 당첨 확률을 const를 통해 0.3의 상수로 설정
const chance = ;

// 값의 표현
// money, id, name이란 id를 가진 html 요소에 해당 변수 값을 입력 (document.getElementById().innerHTML 활용)
document.getElementById(" ").innerHTML = money;
document.getElementById(" ").innerHTML = play;
document.getElementById(" ").innerHTML = name;

// 함수 -> 실행문들의 집합에 이름을 붙인 것 (차후 설명)
function run() {
    // alert() 를 사용하여 '슬롯머신을 돌렸습니다!' 메시지 표현
    alert('');
    // Math.random을 사용하여, 값이 chance 이하면 money를 2배로 만들어주고, 지면 1/2로 만드는 조건문(if) 작성
    // play 횟수에 1을 더해줌
    play  ;
    if(Math.random()  chance) {
        // alert()를 통한 당첨 메시지
        ('와우! 당첨, 소지금이 두배가 되었다!');
        money *= 2;
    } else {
        // alert()를 통한 꽝 메시지
        ('에이... 꽝, 소지금이 절반이 되었다!');
        money /= 2;
    }
    // money와 play의 값을 업데이트 해준다. (document.getElementById().innerHTML 활용)
    document.getElementById(" ").innerHTML = ;
    document.getElementById(" ").innerHTML = ;
}
function runWhile() {
    // run() 함수를 참고하여 작성 (슬롯머신 작동 메시지)
    '슬롯머신을 돌렸습니다!';
    // 자동으로 무한히 반복되지만, 당첨되었을 경우 break를 해주는 while문 작성
    let w = 0
    while( ) {
        // 변수 w를 활용해 지금이 몇 번째 작동인지 알려주는 alert() 작성
        (++w + '번째 작동!')
        // run() 함수를 참고하여 작성 (슬롯머신 기능)
        play++;
        if() {
            alert();
            money 2;
            break;
        } else {
            alert();
            money 2;
        }
    }
    // run() 함수를 참고하여 작성 (숫자 업데이트)
    document.getElementById("").innerHTML = ;
    document.getElementById("").innerHTML = ;
}

function runFor10() {
    // run() 함수를 참고하여 작성 (슬롯머신 작동 메시지)
    '슬롯머신을 돌렸습니다!';
    for(let i = 0; i < 10; i++) {
        // 변수 i를 활용해 지금이 몇 번째 작동인지 알려주는 alert() 작성
        ( + "번째 작동")
        // run() 함수를 참고하여 작성 (슬롯머신 기능)
        // play 횟수에 1을 더해줌
        play;
        if() {
            alert();
            money 2;
        } else {
            alert();
            money 2;
        }
    }
    // run() 함수를 참고하여 작성 (숫자 업데이트)
    document.getElementById("").innerHTML = ;
    document.getElementById("").innerHTML = ;
}