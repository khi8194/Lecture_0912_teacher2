const originArr = [1, 2, 3];
//기존 원본 배열을 새로운 newArr1에 옮겨담아서 복사
//callstack상에서 originArr라는 변수에 있던 참조링크값을 복사해서 newArr1에 할당
//힙메모리상의 원본 데이터는 그대로 있고 해당 값을 가리키는 참조 링크만 복사되서 각각 newArr1, originArr에 있음
//shallow copy(얕은복사) : 원본 데이터는 그대로 있고 참조링크만 새로운 변수에 복사된 형태
const newArr1 = originArr;

//새로운 참조 링크가 복사된 newArr1을 불러와서 값을 변경처리하면
//결국 가리키고 있는 메모리힙상의 값은 동일하기 때문에 원본의 훼손이 일어남 (불변성 유지 안됨)
newArr1[0] = 0;

console.log(newArr1); // [0,2,3]
console.log(originArr); // [0,2,3] 원본값도 변경됨
