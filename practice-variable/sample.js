var str = "webcamp"

function foo() { 
  console.log(str)
//  ホイスティングによりこの時点で変数の値は代入されていない = undefinedを初期値として代入
  var str = "dmm webcamp"
  console.log(str)
//  関数内でconsoleが使用されているため、関数スコープのstrが参照される
}

foo()