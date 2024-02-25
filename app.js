let alertString;
alertString = addString("WebCamp");
alert(alertString);

function addString(strA) {
  let addStr = "Hello " + strA;
  return addStr;
}

let promptStr = prompt('何か好きな文字を入力してください。')
// 入力ダイアログを表示
alert(promptStr);
// 入力された文字列はprompt()関数の戻り値として変数「promptStr」に格納される


// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while((user_hand != "グー") && (user_hand != "チョキ") 
&& (user_hand != "パー") && (user_hand != null)){
  // キャンセルボタン(null判定)用に条件を追加するのを忘れない
  alert("グー・チョキ・パーのいずれかを入力してください");
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
// じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);


// 結果を表示する
if(user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
}else{
  alert('またチャレンジしてね');
}

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  // Math.floor() 対象の値の小数点以下を切り捨てた値を取得
  // Math.random() 0 以上 1 未満のランダムな浮動小数点数を作成して返す
  // 0～2までのランダムな整数値を生成,
  // 関数内の「3」は、ランダム生成したい整数値の+1を指定 => Math.floor( Math.random() * 3 ) + 1 でもOK

  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }
  // js_hand_numによってhand_nameの値が決められる
  return hand_name;
  // 結果を戻り値として返し、getJShandの引数に格納する
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  // 引数でuser_handとjs_handの値をそれぞれ受け取る
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}