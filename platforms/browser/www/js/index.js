document.addEventListener("deviceready",function(){
  console.log(cordova.plugins.notification.local.getDefaults());
  /*cordova.plugins.notification.local.schedule([
    { id: 1, title: 'todo', text: "アアア", sticky: true }
  ]);
  setTimeout(function(){
    cordova.plugins.notification.local.update({
      id: 1,
      text: "イイイ"
    });
  },10000);*/
});

/*let selectedSlot;
let push;

document.addEventListener("deviceready",function(){
  selectedSlot=null;
  if(window.localStorage.getItem("push")==null) push="off";
  else push=window.localStorage.getItem("push");

  //localStorageからスロットのテキスト読み込み
  for (let slot of document.querySelectorAll(".slot")) {
    slot.firstElementChild.innerHTML=window.localStorage.getItem(slot.id);
  }

  if(push=="on"){
    turnOnRelatedPush();
  }else{
    turnOffRelatedPush();
  }

  //ON/OFFボタンクリック時の挙動
  document.querySelector(".top span.pushSwitch").addEventListener("click",function(){
    if(push=="off"){
      cordova.plugins.notification.local.schedule([
        { id: 1, title: 'todo', text: composeNotificationText(), sticky: true }
      ]);
      turnOnRelatedPush();
    }else{
      cordova.plugins.notification.local.cancelAll();
      turnOffRelatedPush();
    }
  });

  //スロットクリック時の挙動
  for (let slot of document.querySelectorAll(".slot")) {
    slot.addEventListener("click",function(){
      selectSlot(slot);
    });
  }

  //編集ウィンドウの保存ボタンクリック時の挙動
  document.querySelector(".editWindow p.options span.save").addEventListener("click",function(){
    let text=document.querySelector(".editWindow textarea.textarea").value;
    text=text.replace(/^[\s　]+/,'');
    window.localStorage.setItem(selectedSlot.id,text);
    selectedSlot.firstElementChild.innerHTML=text;
    unselectSlot();
    if(push=="on"){
      cordova.plugins.notification.local.schedule([
        { id: 1, title: 'todo', text: composeNotificationText(), sticky: true }
      ]);
    }
  });

  //編集ウィンドウのクリアボタンクリック時の挙動
  document.querySelector(".editWindow p.options span.clear").addEventListener("click",function(){
    window.localStorage.setItem(selectedSlot.id,"");
    selectedSlot.firstElementChild.innerHTML="";
    unselectSlot();
    if(push=="on"){
      cordova.plugins.notification.local.schedule([
        { id: 1, title: 'todo', text: composeNotificationText(), sticky: true }
      ]);
    }
  });

  //黒カバークリック時の挙動
  document.querySelector(".cover").addEventListener("click",function(){
    unselectSlot();
  });
});

//------------------------------------------------------------------

function composeNotificationText(){
  result="";
  for (let slot of document.querySelectorAll(".slot")) {
    if(slot.firstElementChild.innerHTML!=""){
      result+="・";
      result+=slot.firstElementChild.innerHTML;
      result+="\n";
    }
  }

  return result;
}

function turnOnRelatedPush(){
  push="on";
  window.localStorage.setItem("push","on");
  document.querySelector(".top span.pushSwitch").classList.add("on");
}

function turnOffRelatedPush(){
  push="off"
  window.localStorage.setItem("push","off");
  document.querySelector(".top span.pushSwitch").classList.remove("on");
}

function selectSlot(slot){
  selectedSlot=slot;
  document.querySelector(".editWindow textarea.textarea").value=selectedSlot.firstElementChild.innerHTML;
  document.querySelector(".editMode").classList.add("on");
}

function unselectSlot(){
  selectedSlot=null;
  document.querySelector(".editMode").classList.remove("on");
}*/
