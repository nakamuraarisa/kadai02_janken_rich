//LINE Messaging APIのチャネルアクセストークン
const LINE_ACCESS_TOKEN = "mE2kyEcS5oFvqzOxhaKULeBCwWpwsNi5hJvQ/X5DEz8sY61THVps8BoDQievg92/wVSKjrWnPC8HE/zKRqdDrJSZf/iM8dyHfJAdNqdTiUAKEfdItv8EDotjSsDk3xAPvXU0zYqg/l+ECZDPAUd4WQdB04t89/1O/w1cDnyilFU=";

//スプレッドシートID
const ss = SpreadsheetApp.openById("1XiuMWvMlngoJQlv1UUWusxZIZxjBOeQShDZ_n4ZWkDo");

//シート名
const sh = ss.getSheetByName("シート1");


//LINE Messaging APIからPOST送信を受けたときに起動する
// e はJSON文字列
function doPost(e){
  if (typeof e === "undefined"){
    //動作を終了する
    return;
  } else {
    //JSON文字列をパース(解析)し、変数jsonに格納する
    const json = JSON.parse(e.postData.contents);

    //変数jsonを関数replyFromSheetに渡し、replyFromSheetを実行する
    replyFromSheet(json)
  }
}
 
//返信用の関数replyFromSheet
// data には変数jsonが代入される
function replyFromSheet(data) {
  //返信先URL
  const replyUrl = "https://api.line.me/v2/bot/message/reply";
   
  //シートの最終行を取得する
  const lastRow = sh.getLastRow();
   
  //シートの全受信語句と返信語句を二次元配列で取得する
  const wordList = sh.getRange(1,1,lastRow,2).getValues();
   
  //受信したメッセージ情報を変数に格納する
  const reply_token = data.events[0].replyToken; //reply token
  const text = data.events[0].message.text; //ユーザーが送信した語句
 
  //返信語句を格納するための空配列を宣言する
  const replyTextList = [];
  
  //LINEで受信した語句がシートの受信語句と同じ場合、返信語句をreplyTextにpushする
  for(let i = 1; i < wordList.length; i++) {
    if(wordList[i][0] == text) {
     replyTextList.push(wordList[i][1]);
    }
  }
  
  //LINEで受信した語句がシートの受信語句と一致しない場合、関数を終了する
  if(replyTextList.length < 1) {
    return;
  } else {
    var messageLength = replyTextList.length;
  }
  
  //"messages"に渡す配列を格納するための空配列を宣言する
  //[{"type": "text", "text": "返信語句その1"},{"type": "text", "text": "返信語句その2"}....]
  const messageArray = [];
  
  //replyTextListに格納されている返信語句を最大5つ、messageArrayにpushする
  for(let j = 0; j < messageLength; j++) {
    messageArray.push({"type": "text", "text": replyTextList[j]});
  }
  
  const headers = {
    "Content-Type": "application/json; charset=UTF-8",
    "Authorization": "Bearer " + LINE_ACCESS_TOKEN,
  };
  
  const postData = {
    "replyToken": reply_token,
    "messages": messageArray
  };

  const options = {
    "method" : "post",
    "headers" : headers,
    "payload" : JSON.stringify(postData)
  };
    
  //LINE Messaging APIにデータを送信する
  UrlFetchApp.fetch(replyUrl, options);
}