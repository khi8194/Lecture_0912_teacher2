/*
  전개 연산자 (Spread Operator)
  : 얕은 복사가 일어나는 것을 방지하기 위해
  아예 메모리힙상의 값을 물리적으로 꺼내서 펼친 뒤 새로운 배열, 객체로 다시 묶어주는 형태  (완전복사: Deep Copy)
*/
const originArr = [1, 2, 3];
//console.log(...originArr);
//힙메모리상에 있는 값 자체를 꺼내서 펼친뒤 복사한 형태
//그렇게 복사가 된 형태의 데이터를 다시 새롭게 배열로 그룹화
//힙메모리상에 새로운 값이 복사되고 새로운 참조값이 생기므로 복사된 배열의 전용 참조값이 newArr에 할당됨
const newArr = [...originArr];
//newArr에는 물리적으로 새로운 메모리힙상의 데이터를 참조하고 있기 떄문에
//해당 참조값이 가리키는 메모리힙상의 값을 고쳐도 원본은 훼손이 일어나지 않음 (불변성 유지됨)
newArr[0] = 0;
console.log(newArr);

//작년 수강생 정보
const first_year = {
  name: "Michael",
  age: 20,
  isFemale: false,
};

//아래와 같이 객체도 기존 배열과 같은 형태로 전개연산자를 통해 복사가 가능
const second_year = { ...first_year };
second_year.age = 21;

//원본 훼손이 일어나지 않음
console.log(first_year);
console.log(second_year);
