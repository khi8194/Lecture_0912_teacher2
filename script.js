/*
  배열전용 내장 함수인 forEach vs map 차이점
  - forEach 
  : 순수배열, 유사배열 모두 반복가능
  : 원본 배열 복사기능 없음, 반복기능만 있음

  - map
  : 순수배열만 반복가능 (유사배열 반복불가 :DOM반복처리 불가)
  : 원본 배열 복사기능 (deep copy) 불변성유지 가능 (Immutable)
  : 참조형 자료를 변경할때 원본 데이터를 훼손시키지 않으면서 복사본 생성
  : 리액트에서는 데이터 변경처리할떄 무조건 원본과 복사본이 같이 있어야됨
  : 원본이 있어야지 원본대비 변경할 내용을 인지가능하기 때문


  forEach는 직접 DOM제어해야 되는 작업환경에서 주로 쓰임
  map: 실제 돔이 아닌 가상돔이라는 순수배열을 다뤄야 되는 리액트에서 주로 쓰임
*/

//const lis = document.getElementsByTagName('li')
//HTMLCollection LiveDOM: 이미 변수에 담았다고 하더라도 이후에 특정 조작이 일어나면 실시간으로 해당 값이 갱신됨
const lis = document.querySelectorAll("ul li");
console.log(lis); //Node List (Static DOM : 해당 요소를 선택한 시점으로 값이 고정)

//유사배열 (NodeList, HTMLCollection도 반복처리 가능)
lis.forEach((data) => data);

//원본 배열 생성
const even = [2, 4, 6];

//원본 배열을 새로운 변수인 newEven1에 담아서 복사
const newEven1 = even;

//복사가된 newEven1이라는 배열의 첫번째 값을 수정
newEven1[0] = 0;

//복사된 배열의 첫번째 값아 변경됨
console.log(newEven1); // [0,4,6]

//수정하지않은 원본 배열 확인
//수정하지 않았음에도 원본도 같이 수정됨 (원본 데이터 훼손)
console.log(even); // [0,4,6]

//위와 똑같은 방법으로 이번엔 원시형 자료 복사
//원시형 자료는 변수값을 복사하는 식으로 완전복사(deep copy가능) 불변성 유지됨
let num = 0;
let newNum = num;
newNum++;
console.log(newNum);
console.log(num);

/*
  참조형자료는 변수에 값을 옮겨담으면 얕은 복사 처리됨 (Shallow Copy)
*/
//자바스크립트에서 let, const 형식으로 만든 변수의 메모리 공간은 callstack에 생성됨
//실제 callstack의 arr라는 변수에는 배열이 위치하고 있는 힙메모리상의 위치값(참조값) 이 담겨있음
const arr = [1, 2, 3];
//arr변수 자체에는 메모리힙상의 위치값만 들어가 있기 떄문에
//아래 경우는 해당 힙메모리상의 값을 바꾼것뿐 callstack에 위치해있는 arr에 담겨있는 참조값이 바뀐것이 아님
//const방식으로 지정했다고 하더라도 callstack상의 값이 바뀐것이 아니기 때문에 변경가능
arr[0] = 0;
console.log(arr);
//미션 - 위와 같은 개념으로 arr라는배열에 아예 새로운 ['red','green','blue']라는 배열을 담으면 에러가 나는 이유 고민

//원시형 자료는 물리적으로 값도 callstack에 담겨있는 형태이기 때문에
//const 방식으로 생성한 변수에 새로 값을 재할당시 에러발생
const text = "hello";
// text = "abc";
// console.log(text);
