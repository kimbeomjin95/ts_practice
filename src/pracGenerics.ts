// Generics: 여러 종류의 타입에 대하여 호환을 맞춰야 하는 상황에서 사용하는 문법
function merge<T1, T2>(a: T1, b: T2) {
  return {
    ...a,
    ...b,
  };
}

// 실제 파라미터에 넣는 타입을 유추 가능(조회O)
const merged = merge({ foo: 1 }, { bar: 2, foobar: 3 });
