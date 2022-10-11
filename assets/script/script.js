var date = new Date;
var day = date.getDate();
var month = date.getMonth()+1;
var year = date.getFullYear();
function toPaper(num){
  var title = document.getElementById("judulInp").value;
  var description = document.getElementById("descriptionInp").value
    var jumlahPertanyaan = document.getElementById("exerNum").value;
    
    document.getElementById("upper").innerHTML = `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="assets/script/script.js"></script>
  <link rel="icon" href="assets/img/exerr_logo.ico" type="image/x-icon">
    <title>`+title+`</title>
    <link rel="stylesheet" href="assets/script/style.css">
    <style>
    body{
      font-family: calibri;
      background-color: #efefef;
      position: relative;
    }
    input[type="text"]{
      height: 37px;
      width: 500px;
      border: 2px solid purple;
      border-radius: 5px;
      font-size: 22px;
      font-family: calibri;
      outline: 2px solid white;
    }
    input[type="text"]:focus{
      border: 2px solid rgb(66, 5, 66);
      box-shadow: 0px 0px 5px grey;
    }
    label{
      color: rgb(66, 5, 66);
      font-size: 15px;
    
    }
    textarea{
      height: 100px;
      width: 500px;
      border: 2px solid purple;
      outline: 2px solid white;
      border-radius: 5px;
      resize: none;
      font-family: calibri;
      font-size: 22px;
      overflow-x: auto;
      white-space: nowrap;
      
    }
    textarea:focus{
      border: 2px solid rgb(66, 5, 66);
      box-shadow: 0px 0px 5px grey;
    }
    .keybox{
      height: 70px;
      width: 500px;
      background-color: white;
      box-shadow: 0px 0px 3px rgb(66, 5, 66);
      border-radius: 5px;
    }
    .opt{
      height: 27px;
      display: inline-block;
      color: white;
      text-align: center;
      line-height: 27px;
      width: 27px;
      border-radius: 50%;
      margin-left: 20px;
      outline: 1px solid purple;
      transition: 0.3s;
      background-color: rgb(172, 63, 172);
      user-select: none;
    }
    .opt:hover{
      outline: 1px solid black;
    }
    .abcGroup{
      height: max-content;
      width: max-content;
      line-height: 70px;
      float: left;
    }
    .number{
      height: 35px;
      width: 35px;
      background-color: rgb(172, 63, 172);
      border: 1px solid purple;
      text-align: center;
      line-height: 35px;
      color: white;
      font-size: 22px;
      border-radius: 50%;
      margin-left: -50px;
    }
    .exercise{
      height: max-content;
      width: max-content;
    }
    .exerNum{
      border: 2px solid purple;
      outline: 2px solid white;
      border-radius: 5px;
      width: 70px;
      height: 40px;
      font-size: 20px;
      color: rgb(66, 5, 66);
      text-align: center;
      float: left;
    }
    .exerNum:focus{
      border: 2px solid rgb(66, 5, 66);
      box-shadow: 0px 0px 5px grey;
    }
    .createExerBtn{
      float: left;
      border-top-right-radius:20px;
      border-bottom-right-radius: 20px;
      border-top-left-radius: 20px;
      height: 40px;
      width: 40px;
      background-color: purple;
      margin-left: 10px;
      text-align: center;
      transition: 0.3s;
      cursor: pointer;
    }
    .createExerBtn:hover{
      background-color: rgb(177, 44, 177);
    }
    .makePopUp{
      height: 100%;
      width: 100%;
      position: fixed;
      background-color: rgb(228, 222, 228);
      z-index: 1;
    }
    .saveBtn{
      height:30px;
      width: 80px;
      border-radius: 5px;
      background-color: purple;
      color: white;
      font-family: calibri;
      user-select: none;
      cursor: pointer;
      transition: 0.3s;
      margin: 5;
    }
    .saveBtn:hover{
      background-color: rgb(172, 63, 172);
    }
    *{
      margin: 0;
    }
    .footer{
      height:170px;
      width: 100%;
      background-color: white;
      bottom: 0;
      box-shadow:0px 0px 4px lightgrey;
     
    }
    .saveBox{
      height: 265px;
      width: 270px;
      background-color: white;
      border-radius: 5px;
      box-shadow: 0px 0px 4px rgb(180, 180, 180);
      position: fixed;
      right: -280;
      margin-top: 50px;
    }
    .downloadBtn{
      padding: 3px;
      background-color: rgb(182, 42, 182);
      color: white;
      box-shadow: 0px 0px 3px lightgrey;
      border: solid rgb(182, 42, 182);
      font-size: 11px;
      height: 29px;
      width: 100px;
      border-radius: 5px;
      cursor: pointer;
      letter-spacing: 0px;
      transition: 0.3s;
    }
    .downloadBtn:hover{
      letter-spacing: 0.5px;
      background-color: rgb(146, 65, 146);
      border: solid rgb(146, 65, 146);
    }
        body{
          background-color: #efefef;
      }
      .exerContainer{
          min-height: 70px;
          max-height: 800px;
          width: 500px;
          border-radius: 5px;
          box-shadow: 0px 0px 5px rgb(207, 207, 207);
          background-color: white;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          margin-top: 20px;
      }
      .ansContainer{
          height: 76px;
          width: 500px;
          line-height: 70px;
          background-color: white;
          border-top: 2px solid purple;
      }
      .exerContainer{
          min-height: 80px;
          max-height: 500px;
          width: 500px;
          font-size: 20px;
      }
      .darkness{
          height: 100%;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.253);
          position: fixed;
      }
      .donePopUp{
          height: 275px;
          width: 400px;
          border-radius: 10px;
          background-color: white;
          position: absolute;
          left: 50%;
          top: 50%;
          opacity: 100%;
          transform: translate(-50%, -50%);
          box-shadow: 0px 0px 4px grey;
      }
      .valuePopup{
          height: 150px;
          width: 150px;
          margin-left: auto;
          margin-right: auto;
          border-radius: 50%;
          margin-top: 40px;
          box-shadow: 0px 0px 5px 5px rgb(173, 52, 173);
          font-size: 60px;
          text-align: center;
          line-height: 140px;
          user-select: none;
          animation: anims 2s linear infinite;
          font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color: rgb(148, 106, 148);
          background-color: rgb(255, 250, 255);
      }
      @keyframes anims {
          0%{box-shadow: 0px 0px 10px 1px rgb(153, 106, 153);}
          50%{box-shadow: 0px 0px 10px 5px rgb(177, 118, 177);}
          100%{box-shadow: 0px 0px 10px 1px rgb(161, 118, 161);}
      }
      .closeBtn{
          font-weight:100;font-size: 50px;position: absolute;margin-left: 360px;margin-top: -5px;color: lightgrey;cursor: pointer;user-select: none;
      }
      .closeBtn:hover{
          color: grey;
      }
      .numOfQuest{
        height: 25px;
        width:max-content;
        font-size: 13px;
        line-height: 25px;
        padding-left: 5px;
        padding-right: 5px;
        /* border-radius: 5px; */
        color: white;
        outline: 2px solid white;
        border: 0px solid purple;
        background-color: rgb(182, 40, 182);
        margin-top: 12px;
        margin-left: 10px;
        float: left;
        user-select: none;
      }
      .timeOfQuest{
        height: 25px;
        width: max-content;
        float: left;
        margin-top: 12px;
        margin-left: 10px;
        line-height: 25px;
        border-radius: 5px;
        font-size: 15px;
        color: rgb(168, 168, 168);
        font-family: calibri light;
        user-select: none;
      }
      .scoreOfQuest{
        height: 25px;
        width: max-content;
        float: right;
        margin-right: 20px;
        margin-top: 12px;
        line-height: 30px;
        font-size: 16;
        font-family: calibri light;
        color: rgb(172, 63, 172);
      }
      .doneBtnContainer{
        height: max-content;
        width: max-content;
        float: right;
        margin-top: 12px;
        margin-right: 20px;
      }
      .doneBtn{
        background-color: rgb(172, 63, 172);
        color: white;
        border: 2px solid rgb(172, 63, 172);
        padding: 3px;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 5px;
        box-shadow: 0px 0px 2px lightgrey;
        cursor: pointer;
        transition: 0.3s;
      }
      .doneBtn:hover{
        background-color: rgb(211, 108, 211);
        border: 2px solid rgb(211, 108, 211);
        box-shadow: 0px 0px 5px lightgrey;
      }
      .doneBtn:active{
        background-color: rgb(177, 118, 177);
        border: 2px solid rgb(177, 118, 177);
      }
    </style>
</head>
<body>
    <div id="dark" style="display:none; " onclick="startAnim()" class="darkness">
        <div id="donePop" class="donePopUp">
            <h1 class="closeBtn" onclick="closePopup()">×</h1>
            <div id="valuePopUp" class="valuePopup">-</div>
            <br>
            <h1 style="text-align:center;font-weight: 400;color: rgb(121, 50, 121);">Congratulation</h1>
        </div>
    </div>
    <div style="margin-left:auto;margin-right: auto;width: max-content;">
        <br>
        <div style="border-bottom-left-radius: 7px;border-bottom-right-radius: 7px;" class="exerContainer">
            <br>
                    <h1 style="font-size:23px;font-family: Arial, Helvetica, sans-serif;font-weight: 100;margin-left: 15px;">`+title+`</h1>
                    <br>
                    <pre style="font-size:16px;margin-left: 15px;font-family: calibri light;">`+description+`</pre>
                    <br>
        </div>
        <div id="infoBox" style="border-radius:5px;min-height:50px;box-shadow: 0px 0px 1px 1px rgb(224, 224, 224);" class="exerContainer">
        <div class="numOfQuest"><b>`+jumlahPertanyaan+`</b> QUEST</div>
        <div class="timeOfQuest">`+month+`/`+day+`/`+year+`</div>
        <div class="doneBtnContainer"><button id="doneBtn" class="doneBtn" onclick="doneBtn()">Done</button></div>
        </div>
    `
    document.getElementById("downer").innerHTML = `</div>
    <script>
        const numQuest = `+jumlahPertanyaan+`;
        
function ans(ans,num,logic){
  pickOneAnswer(num)
var check = document.getElementById("check"+ans+num);
var check_ui = document.getElementById("ui"+ans+num)
if (check.checked == true) {
  // UI AND EFFECT
  check_ui.style.color = 'white'
  check_ui.style.backgroundColor = 'rgb(172, 63, 172)'
  //end UI AND EFFECT

  //ENGINE AND LOGIC
  if (logic == 1) {
      document.getElementById("v"+num).innerHTML = 1
      }else{
          document.getElementById("v"+num).innerHTML = 0
      }
  //end ENGINE AND LOGIC
}else{
  // UI AND EFFECT
  check_ui.style.backgroundColor = 'white'
  check_ui.style.color = 'rgb(172, 63, 172)'
  
  //end UI AND EFFECT

  //ENGINE AND LOGIC
  if (logic == 1) {
  document.getElementById("v"+num).innerHTML = 1
  }else{
      document.getElementById("v"+num).innerHTML = 0
  }
  //end ENGINE AND LOGIC
}
}
function doneBtn(){
  document.getElementById('doneBtn').style.display = 'none'
   if (numQuest == 2) {
      var value = parseInt(v1.innerHTML)+parseInt(v2.innerHTML);
      document.getElementById("valuePopUp").innerHTML = value+'/'+numQuest;
      var x = document.createElement("div")
      x.innerHTML = '<div class="scoreOfQuest"><b>SCORE <b style="background-color:rgb(172, 63, 172);color: white;padding: 3px;border-radius: 5px;font-size: 15px;">'+value+'/'+numQuest+'</b></b></div>'
      document.getElementById("infoBox").appendChild(x)
   }
   if (numQuest == 3) {
      var value = parseInt(v1.innerHTML)+parseInt(v2.innerHTML)+parseInt(v3.innerHTML);
      document.getElementById("valuePopUp").innerHTML = value+'/'+numQuest;
      var x = document.createElement("div")
      x.innerHTML = '<div class="scoreOfQuest"><b>SCORE <b style="background-color:rgb(172, 63, 172);color: white;padding: 3px;border-radius: 5px;font-size: 15px;">'+value+'/'+numQuest+'</b></b></div>'
      document.getElementById("infoBox").appendChild(x)
   }
   if (numQuest == 4) {
      var value = parseInt(v1.innerHTML)+parseInt(v2.innerHTML)+parseInt(v3.innerHTML)+parseInt(v4.innerHTML);
      document.getElementById("valuePopUp").innerHTML = value+'/'+numQuest;
      var x = document.createElement("div")
      x.innerHTML = '<div class="scoreOfQuest"><b>SCORE <b style="background-color:rgb(172, 63, 172);color: white;padding: 3px;border-radius: 5px;font-size: 15px;">'+value+'/'+numQuest+'</b></b></div>'
      document.getElementById("infoBox").appendChild(x)
   }
   if (numQuest == 5) {
      var value = parseInt(v1.innerHTML)+parseInt(v2.innerHTML)+parseInt(v3.innerHTML)+parseInt(v4.innerHTML)+parseInt(v5.innerHTML);
      document.getElementById("valuePopUp").innerHTML = value+'/'+numQuest;
      var x = document.createElement("div")
      x.innerHTML = '<div class="scoreOfQuest"><b>SCORE <b style="background-color:rgb(172, 63, 172);color: white;padding: 3px;border-radius: 5px;font-size: 15px;">'+value+'/'+numQuest+'</b></b></div>'
      document.getElementById("infoBox").appendChild(x)
   }
   if (numQuest == 6) {
    var value = parseInt(v1.innerHTML)+parseInt(v2.innerHTML)+parseInt(v3.innerHTML)+parseInt(v4.innerHTML)+parseInt(v5.innerHTML)+parseInt(v6.innerHTML);
    document.getElementById("valuePopUp").innerHTML = value+'/'+numQuest;
    var x = document.createElement("div")
    x.innerHTML = '<div class="scoreOfQuest"><b>SCORE <b style="background-color:rgb(172, 63, 172);color: white;padding: 3px;border-radius: 5px;font-size: 15px;">'+value+'/'+numQuest+'</b></b></div>'
    document.getElementById("infoBox").appendChild(x)
 }
 if (numQuest == 7) {
    var value = parseInt(v1.innerHTML)+parseInt(v2.innerHTML)+parseInt(v3.innerHTML)+parseInt(v4.innerHTML)+parseInt(v5.innerHTML)+parseInt(v6.innerHTML)+parseInt(v7.innerHTML);
    document.getElementById("valuePopUp").innerHTML = value+'/'+numQuest;
    var x = document.createElement("div")
    x.innerHTML = '<div class="scoreOfQuest"><b>SCORE <b style="background-color:rgb(172, 63, 172);color: white;padding: 3px;border-radius: 5px;font-size: 15px;">'+value+'/'+numQuest+'</b></b></div>'
    document.getElementById("infoBox").appendChild(x)
 }
 if (numQuest == 8) {
    var value = parseInt(v1.innerHTML)+parseInt(v2.innerHTML)+parseInt(v3.innerHTML)+parseInt(v4.innerHTML)+parseInt(v5.innerHTML)+parseInt(v6.innerHTML)+parseInt(v7.innerHTML)+parseInt(v8.innerHTML);
    document.getElementById("valuePopUp").innerHTML = value+'/'+numQuest;
    var x = document.createElement("div")
    x.innerHTML = '<div class="scoreOfQuest"><b>SCORE <b style="background-color:rgb(172, 63, 172);color: white;padding: 3px;border-radius: 5px;font-size: 15px;">'+value+'/'+numQuest+'</b></b></div>'
    document.getElementById("infoBox").appendChild(x)
 }
 if (numQuest == 9) {
    var value = parseInt(v1.innerHTML)+parseInt(v2.innerHTML)+parseInt(v3.innerHTML)+parseInt(v4.innerHTML)+parseInt(v5.innerHTML)+parseInt(v6.innerHTML)+parseInt(v7.innerHTML)+parseInt(v8.innerHTML)+parseInt(v9.innerHTML);
    document.getElementById("valuePopUp").innerHTML = value+'/'+numQuest;
    var x = document.createElement("div")
    x.innerHTML = '<div class="scoreOfQuest"><b>SCORE <b style="background-color:rgb(172, 63, 172);color: white;padding: 3px;border-radius: 5px;font-size: 15px;">'+value+'/'+numQuest+'</b></b></div>'
    document.getElementById("infoBox").appendChild(x)
 }
 if (numQuest == 10) {
    var value = parseInt(v1.innerHTML)+parseInt(v2.innerHTML)+parseInt(v3.innerHTML)+parseInt(v4.innerHTML)+parseInt(v5.innerHTML)+parseInt(v6.innerHTML)+parseInt(v7.innerHTML)+parseInt(v8.innerHTML)+parseInt(v9.innerHTML)+parseInt(v10.innerHTML);
    document.getElementById("valuePopUp").innerHTML = value+'/'+numQuest;
    var x = document.createElement("div")
    x.innerHTML = '<div class="scoreOfQuest"><b>SCORE <b style="background-color:rgb(172, 63, 172);color: white;padding: 3px;border-radius: 5px;font-size: 15px;">'+value+'/'+numQuest+'</b></b></div>'
    document.getElementById("infoBox").appendChild(x)
 }
   document.getElementById("dark").style.display = ""
  setTimeout(() => {
var x = document.getElementById("donePop")
x.style.transition = '0.3s'
x.style.top = '50%'
x.style.opacity = '100%'
                   }, 300);
}
function closePopup(){
var x = document.getElementById("donePop");
x.style.opacity = "0%"
x.style.display = 'none'
setTimeout(() => {
  x.style.display = 'none'
  document.getElementById("dark").style.display = 'none'
}, 300);
}
function pickOneAnswer(num){
  if (document.getElementById("checkA"+num+"").checked == true) {
  }else{
    document.getElementById("checkB"+num+"").checked = false
    document.getElementById("checkC"+num+"").checked = false
    document.getElementById("checkD"+num+"").checked = false
    document.getElementById("checkB"+num+"").style.color = 'white'
    document.getElementById("checkB"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
    document.getElementById("checkC"+num+"").style.color = 'white'
    document.getElementById("checkC"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
    document.getElementById("checkD"+num+"").style.color = 'white'
    document.getElementById("checkD"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
    
  }
  if (document.getElementById("checkB"+num+"").checked == true) {
  }else{
    document.getElementById("checkA"+num+"").checked = false
    document.getElementById("checkC"+num+"").checked = false
    document.getElementById("checkD"+num+"").checked = false
    document.getElementById("uiA"+num+"").style.color = 'white'
    document.getElementById("uiA"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
    document.getElementById("uiC"+num+"").style.color = 'white'
    document.getElementById("uiC"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
    document.getElementById("uiD"+num+"").style.color = 'white'
    document.getElementById("uiD"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
    
  }
  if (document.getElementById("checkC"+num+"").checked == true) {
  }else{
    document.getElementById("checkB"+num+"").checked = false
    document.getElementById("checkA"+num+"").checked = false
    document.getElementById("checkD"+num+"").checked = false
    document.getElementById("uiB"+num+"").style.color = 'white'
    document.getElementById("uiB"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
    document.getElementById("uiA"+num+"").style.color = 'white'
    document.getElementById("uiA"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
    document.getElementById("uiD"+num+"").style.color = 'white'
    document.getElementById("uiD"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
    
  }
  if (document.getElementById("checkD"+num+"").checked == true) {
  }else{
    document.getElementById("checkB"+num+"").checked = false
    document.getElementById("checkC"+num+"").checked = false
    document.getElementById("checkA"+num+"").checked = false
    document.getElementById("uiB"+num+"").style.color = 'white'
    document.getElementById("uiB"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
    document.getElementById("uiC"+num+"").style.color = 'white'
    document.getElementById("uiC"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
    document.getElementById("uiA"+num+"").style.color = 'white'
    document.getElementById("uiA"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
    
  }
}
function startAnim(){
  
}
    </script>
</body>
</html>`
    var chA = document.getElementById("checkA"+num)
    var chB = document.getElementById("checkB"+num)
    var chC = document.getElementById("checkC"+num)
    var chD = document.getElementById("checkD"+num)
    if (chA.checked == true) {
      var isiPertanyaan = document.getElementById("quest"+num).value;
    document.getElementById("textarea"+num).innerHTML = `<div class="allContainer">
          <div class="exerContainer">
            <p style="display:none;" id="v`+num+`">0</p>
              <div style="width:92%;margin-left: auto;margin-right: auto;">
              <pre style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"><br>`+num+`. `+document.getElementById("quest"+num).value+`</pre>
              <br>
              </div>                
          </div>
          <div class="ansContainer">
              <div style="height:max-content;width: max-content;margin-left: auto;margin-right: auto;line-height: 80px;">
              <label id="uiA`+num+`" onclick="ans('A',`+num+`,1)" for="checkA`+num+`" class="opt">A</label>
      <label id="uiB`+num+`" onclick="ans('B',`+num+`,0)" for="checkB`+num+`"  class="opt">B</label>
      <label id="uiC`+num+`" onclick="ans('C',`+num+`,0)" for="checkC`+num+`"  class="opt">C</label>
      <label id="uiD`+num+`" onclick="ans('D',`+num+`,0)" for="checkD`+num+`"  class="opt">D</label>
      <input type="checkbox" style="display:none;" id="checkA`+num+`">
<input type="checkbox" style="display: none;" id="checkB`+num+`">
<input type="checkbox" style="display: none;" id="checkC`+num+`">
<input type="checkbox" style="display: none;" id="checkD`+num+`">
      </div>
          </div>
          </div>`
    }
    if (chB.checked == true) {
      var isiPertanyaan = document.getElementById("quest"+num).value;
    document.getElementById("textarea"+num).innerHTML = `<div class="allContainer">
          <div class="exerContainer">
            <p style="display:none;" id="v`+num+`">0</p>
              <div style="width:92%;margin-left: auto;margin-right: auto;">
              <pre style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"><br>`+num+`. `+document.getElementById("quest"+num).value+`</pre>
              <br>
              </div>
          </div>
          <div class="ansContainer">
              <div style="height:max-content;width: max-content;margin-left: auto;margin-right: auto;line-height: 80px;">
              <label id="uiA`+num+`" onclick="ans('A',`+num+`,0)" for="checkA`+num+`" class="opt">A</label>
      <label id="uiB`+num+`" onclick="ans('B',`+num+`,1)" for="checkB`+num+`"  class="opt">B</label>
      <label id="uiC`+num+`" onclick="ans('C',`+num+`,0)" for="checkC`+num+`"  class="opt">C</label>
      <label id="uiD`+num+`" onclick="ans('D',`+num+`,0)" for="checkD`+num+`"  class="opt">D</label>
      <input type="checkbox" style="display:none;" id="checkA`+num+`">
<input type="checkbox" style="display: none;" id="checkB`+num+`">
<input type="checkbox" style="display: none;" id="checkC`+num+`">
<input type="checkbox" style="display: none;" id="checkD`+num+`">
      </div>
          </div>
          </div>`
    }
    if (chC.checked == true) {

      var isiPertanyaan = document.getElementById("quest"+num).value;
    document.getElementById("textarea"+num).innerHTML = `<div class="allContainer">
          <div class="exerContainer">
            <p style="display:none;" id="v`+num+`">0</p>
              <div style="width:92%;margin-left: auto;margin-right: auto;">
              <pre style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"><br>`+num+`. `+document.getElementById("quest"+num).value+`</pre>
              <br>
              </div>
          </div>
          <div class="ansContainer">
              <div style="height:max-content;width: max-content;margin-left: auto;margin-right: auto;line-height: 80px;">
              <label id="uiA`+num+`" onclick="ans('A',`+num+`,0)" for="checkA`+num+`" class="opt">A</label>
      <label id="uiB`+num+`" onclick="ans('B',`+num+`,0)" for="checkB`+num+`"  class="opt">B</label>
      <label id="uiC`+num+`" onclick="ans('C',`+num+`,1)" for="checkC`+num+`"  class="opt">C</label>
      <label id="uiD`+num+`" onclick="ans('D',`+num+`,0)" for="checkD`+num+`"  class="opt">D</label>
      <input type="checkbox" style="display:none;" id="checkA`+num+`">
<input type="checkbox" style="display: none;" id="checkB`+num+`">
<input type="checkbox" style="display: none;" id="checkC`+num+`">
<input type="checkbox" style="display: none;" id="checkD`+num+`">
      </div>
          </div>
          </div>`
    }
    if (chD.checked == true) {
    var isiPertanyaan = document.getElementById("quest"+num).value;
    document.getElementById("textarea"+num).innerHTML = `<div class="allContainer">
          <div class="exerContainer">
            <p style="display:none;" id="v`+num+`">0</p>
              <div style="width:92%;margin-left: auto;margin-right: auto;">
              <pre style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"><br>`+num+`. `+document.getElementById("quest"+num).value+`</pre>
              <br>
              </div>
          </div>
          <div class="ansContainer">
              <div style="height:max-content;width: max-content;margin-left: auto;margin-right: auto;line-height: 80px;">
              <label id="uiA`+num+`" onclick="ans('A',`+num+`,0)" for="checkA`+num+`" class="opt">A</label>
      <label id="uiB`+num+`" onclick="ans('B',`+num+`,0)" for="checkB`+num+`"  class="opt">B</label>
      <label id="uiC`+num+`" onclick="ans('C',`+num+`,0)" for="checkC`+num+`"  class="opt">C</label>
      <label id="uiD`+num+`" onclick="ans('D',`+num+`,1)" for="checkD`+num+`"  class="opt">D</label>
      <input type="checkbox" style="display:none;" id="checkA`+num+`">
<input type="checkbox" style="display: none;" id="checkB`+num+`">
<input type="checkbox" style="display: none;" id="checkC`+num+`">
<input type="checkbox" style="display: none;" id="checkD`+num+`">
      </div>
          </div>
          </div>`
  }
  }
  function makeAnswer(num,letter){
    if (document.getElementById("checkA"+num+"").checked == true) {
    }else{
      document.getElementById("checkB"+num+"").checked = false
      document.getElementById("checkC"+num+"").checked = false
      document.getElementById("checkD"+num+"").checked = false
      document.getElementById("checkB"+num+"").style.color = 'white'
      document.getElementById("checkB"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
      document.getElementById("checkC"+num+"").style.color = 'white'
      document.getElementById("checkC"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
      document.getElementById("checkD"+num+"").style.color = 'white'
      document.getElementById("checkD"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
      
    }
    if (document.getElementById("checkB"+num+"").checked == true) {
    }else{
      document.getElementById("checkA"+num+"").checked = false
      document.getElementById("checkC"+num+"").checked = false
      document.getElementById("checkD"+num+"").checked = false
      document.getElementById("uiA"+num+"").style.color = 'white'
      document.getElementById("uiA"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
      document.getElementById("uiC"+num+"").style.color = 'white'
      document.getElementById("uiC"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
      document.getElementById("uiD"+num+"").style.color = 'white'
      document.getElementById("uiD"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
      
    }
    if (document.getElementById("checkC"+num+"").checked == true) {
    }else{
      document.getElementById("checkB"+num+"").checked = false
      document.getElementById("checkA"+num+"").checked = false
      document.getElementById("checkD"+num+"").checked = false
      document.getElementById("uiB"+num+"").style.color = 'white'
      document.getElementById("uiB"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
      document.getElementById("uiA"+num+"").style.color = 'white'
      document.getElementById("uiA"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
      document.getElementById("uiD"+num+"").style.color = 'white'
      document.getElementById("uiD"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
      
    }
    if (document.getElementById("checkD"+num+"").checked == true) {
    }else{
      document.getElementById("checkB"+num+"").checked = false
      document.getElementById("checkC"+num+"").checked = false
      document.getElementById("checkA"+num+"").checked = false
      document.getElementById("uiB"+num+"").style.color = 'white'
      document.getElementById("uiB"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
      document.getElementById("uiC"+num+"").style.color = 'white'
      document.getElementById("uiC"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
      document.getElementById("uiA"+num+"").style.color = 'white'
      document.getElementById("uiA"+num+"").style.backgroundColor = 'rgb(172, 63, 172)'
      
    }
    var xo = document.createElement("div");
    xo.innerHTML = `<button style='display:none' id="paperButton`+num+`" onclick="toPaper(`+num+`)">setPaperX</buttom>`
    document.body.appendChild(xo)
    var idName = document.getElementById("ui"+letter+num)
    var ch = document.getElementById("check"+letter+num);
    
    if (ch.checked == true) {
      
      document.getElementById("ui"+letter+num).style.color = 'white'
      document.getElementById("ui"+letter+num).style.backgroundColor = "rgb(172, 63, 172)"
      
    }else{
      
      document.getElementById("ui"+letter+num).style.backgroundColor = 'white'
      document.getElementById("ui"+letter+num).style.color = "rgb(172, 63, 172)"
      
      
    }

    

  }
  function makeTxt(){
    var jumlahPertanyaan = document.getElementById("exerNum").value;
    for (let i = 1; i < jumlahPertanyaan; i++){
      document.getElementById("paperButton"+i+"").click();
      document.getElementById("paperButton"+jumlahPertanyaan).click()
    }
    if (jumlahPertanyaan == 1) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+`</textarea>`
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 2) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value+`</textarea>`
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 3) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value+document.getElementById('textarea3').value+`</textarea>`
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 4) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value+document.getElementById('textarea3').value+document.getElementById('textarea4').value+`</textarea>`
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 5) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value+document.getElementById('textarea3').value+document.getElementById('textarea4').value+document.getElementById('textarea5').value+`</textarea>`
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 6) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value+document.getElementById('textarea3').value+document.getElementById('textarea4').value+document.getElementById('textarea5').value+document.getElementById('textarea6').value+`</textarea>`
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 7) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value
      +document.getElementById('textarea3').value
      +document.getElementById('textarea4').value+document.getElementById('textarea5').value+document.getElementById('textarea6').value+document.getElementById('textarea7').value+`</textarea>`
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 8) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value+document.getElementById('textarea3').value+document.getElementById('textarea4').value+document.getElementById('textarea5').value+document.getElementById('textarea6').value+document.getElementById('textarea7').value+document.getElementById('textarea8').value+`</textarea>`
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 9) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value+document.getElementById('textarea3').value+document.getElementById('textarea4').value+document.getElementById('textarea5').value+document.getElementById('textarea6').value+document.getElementById('textarea7').value+document.getElementById('textarea8').value
      +document.getElementById('textarea9').value+`</textarea>`
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 10) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value
      +document.getElementById('textarea3').value
      +document.getElementById('textarea4').value+document.getElementById('textarea5').value+document.getElementById('textarea6').value+document.getElementById('textarea7').value+document.getElementById('textarea8').value+document.getElementById('textarea9').value+document.getElementById('textarea10').value+`</textarea>`
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 11) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value
      +document.getElementById('textarea3').value
      +document.getElementById('textarea4').value+document.getElementById('textarea5').value+document.getElementById('textarea6').value+document.getElementById('textarea7').value+document.getElementById('textarea8').value+document.getElementById('textarea9').value+document.getElementById('textarea10').value+document.getElementById('textarea11').value+`</textarea>`
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 12) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value
      +document.getElementById('textarea3').value
      +document.getElementById('textarea4').value+document.getElementById('textarea5').value+document.getElementById('textarea6').value+document.getElementById('textarea7').value+document.getElementById('textarea8').value+document.getElementById('textarea9').value+document.getElementById('textarea10').value+document.getElementById('textarea11').value+document.getElementById('textarea12').value+`</textarea>`
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 13) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value
      +document.getElementById('textarea3').value
      +document.getElementById('textarea4').value+document.getElementById('textarea5').value+document.getElementById('textarea6').value+document.getElementById('textarea7').value+document.getElementById('textarea8').value+document.getElementById('textarea9').value+document.getElementById('textarea10').value+document.getElementById('textarea11').value+document.getElementById('textarea12').value+document.getElementById('textarea13').value
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 14) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value
      +document.getElementById('textarea3').value
      +document.getElementById('textarea4').value+document.getElementById('textarea5').value+document.getElementById('textarea6').value+document.getElementById('textarea7').value+document.getElementById('textarea8').value+document.getElementById('textarea9').value+document.getElementById('textarea10').value+document.getElementById('textarea11').value+document.getElementById('textarea12').value+document.getElementById('textarea13').value+document.getElementById('textarea14').value
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 15) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value
      +document.getElementById('textarea3').value
      +document.getElementById('textarea4').value+document.getElementById('textarea5').value+document.getElementById('textarea6').value+document.getElementById('textarea7').value+document.getElementById('textarea8').value+document.getElementById('textarea9').value+document.getElementById('textarea10').value+document.getElementById('textarea11').value+document.getElementById('textarea12').value+document.getElementById('textarea13').value+document.getElementById('textarea14').value+document.getElementById('textarea15').value
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 16) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value
      +document.getElementById('textarea3').value
      +document.getElementById('textarea4').value+document.getElementById('textarea5').value+document.getElementById('textarea6').value+document.getElementById('textarea7').value+document.getElementById('textarea8').value+document.getElementById('textarea9').value+document.getElementById('textarea10').value+document.getElementById('textarea11').value+document.getElementById('textarea12').value+document.getElementById('textarea13').value+document.getElementById('textarea14').value+document.getElementById('textarea15').value+document.getElementById('textarea16').value
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 17) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value
      +document.getElementById('textarea3').value
      +document.getElementById('textarea4').value+document.getElementById('textarea5').value+document.getElementById('textarea6').value+document.getElementById('textarea7').value+document.getElementById('textarea8').value+document.getElementById('textarea9').value+document.getElementById('textarea10').value+document.getElementById('textarea11').value+document.getElementById('textarea12').value+document.getElementById('textarea13').value+document.getElementById('textarea14').value+document.getElementById('textarea15').value+document.getElementById('textarea16').value+document.getElementById('textarea17').value
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 18) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value
      +document.getElementById('textarea3').value
      +document.getElementById('textarea4').value+document.getElementById('textarea5').value+document.getElementById('textarea6').value+document.getElementById('textarea7').value+document.getElementById('textarea8').value+document.getElementById('textarea9').value+document.getElementById('textarea10').value
      +document.getElementById('textarea11').value
      +document.getElementById('textarea12').value+document.getElementById('textarea13').value+document.getElementById('textarea14').value+document.getElementById('textarea15').value+document.getElementById('textarea16').value+document.getElementById('textarea17').value+document.getElementById('textarea18').value
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 19) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value
      +document.getElementById('textarea3').value
      +document.getElementById('textarea4').value+document.getElementById('textarea5').value+document.getElementById('textarea6').value+document.getElementById('textarea7').value+document.getElementById('textarea8').value+document.getElementById('textarea9').value+document.getElementById('textarea10').value+document.getElementById('textarea11').value+document.getElementById('textarea12').value+document.getElementById('textarea13').value+document.getElementById('textarea14').value+document.getElementById('textarea15').value+document.getElementById('textarea16').value+document.getElementById('textarea17').value+document.getElementById('textarea18').value+document.getElementById('textarea19').value
      document.body.appendChild(to)
    }
    if (jumlahPertanyaan == 20) {
      var to = document.createElement("div");
      to.innerHTML = `<textarea style='display:none;' id='dund'>`
      +document.getElementById('textarea1').value+document.getElementById('textarea2').value
      +document.getElementById('textarea3').value
      +document.getElementById('textarea4').value+document.getElementById('textarea5').value+document.getElementById('textarea6').value+document.getElementById('textarea7').value+document.getElementById('textarea8').value+document.getElementById('textarea9').value+document.getElementById('textarea10').value+document.getElementById('textarea11').value+document.getElementById('textarea12').value+document.getElementById('textarea13').value+document.getElementById('textarea14').value+document.getElementById('textarea15').value+document.getElementById('textarea16').value+document.getElementById('textarea17').value+document.getElementById('textarea18').value+document.getElementById('textarea19').value+document.getElementById('textarea20').value
      document.body.appendChild(to)
    }
    document.getElementById("allTotal").innerHTML = document.getElementById("upper").value+document.getElementById("dund").value+document.getElementById("downer").value;
    document.getElementById("saveBox").style.right = 0;
    document.getElementById("saveBox").style.transition = '0.3s'
  }
  function ee(){
    var x = document.getElementById("tester");
    +document.getElementById("textarea1").innerHTML;

  }
  var nm = 1;
  function fullFill(num){
    document.getElementById("textarea"+num+"").innerHTML = 
    `<div class="allContainer">
          <div class="exerContainer">
          <br>
            <p style="display:none;" id="v`+num+`">0</p>
              <div style="width:92%;margin-left: auto;margin-right: auto;">
              <pre style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">`+num+`. `+document.getElementById("quest"+num).value+`</pre>
              </div>
          </div>
          <div class="ansContainer">
              <div style="height:max-content;width: max-content;margin-left: auto;margin-right: auto;line-height: 80px;">
              <label id="uiA`+num+`" onclick="ans('A',`+num+`,0)" for="checkA`+num+`" class="opt">A</label>
      <label id="uiB`+num+`" onclick="ans('B',`+num+`,0)" for="checkB`+num+`"  class="opt">B</label>
      <label id="uiC`+num+`" onclick="ans('C',`+num+`,0)" for="checkC`+num+`"  class="opt">C</label>
      <label id="uiD`+num+`" onclick="ans('D',`+num+`,0)" for="checkD`+num+`"  class="opt">D</label>
      <input type="checkbox" style="display:none;" id="checkA`+num+`">
<input type="checkbox" style="display: none;" id="checkB`+num+`">
<input type="checkbox" style="display: none;" id="checkC`+num+`">
<input type="checkbox" style="display: none;" id="checkD`+num+`">
      </div>
          </div>
          </div>`
  }
  function setAns(num,letter){
    var ch = document.getElementById("check"+letter);
    
    if (ch.checked == true) {
      document.getElementById("ui"+letter+num).style.color = 'white'
      document.getElementById("ui"+letter+num).style.backgroundColor = "rgb(172, 63, 172)"
      
    }else{
      document.getElementById("ui"+letter+num).style.backgroundColor = 'white'
      document.getElementById("ui"+letter+num).style.color = "rgb(172, 63, 172)"
      
    }
  }
  function createExer(){
    window.onbeforeunload = function()
{
  return "Change are still not saved. Are you sure?";
};
    var exerNum = document.getElementById("exerNum").value;
    if (exerNum < 2) {
      Stechal({
        title: "Warning",
        text: "The minimum number of questions is <b>2</b>",
        textStyle: "margin-top:5px;",
        buttonStyle:"margin-top:9px",
        id: "didin",
        type: "alert",
        icon: "information",
        button: "OK"
      })
      return false
    }
    if (exerNum > 5) {
      Stechal({
        title: "Warning",
        text: "The maximum number of questions is <b>5</b>",
        textStyle: "margin-top:5px;",
        buttonStyle:"margin-top:9px",
        id: "didin",
        type: "alert",
        icon: "information",
        button: "OK"
      })
    }
    if (document.getElementById("judulInp").value == "") {
      Stechal({
        text:"",
        button:'OK',
        title:"Title can't be empty",
        titleStyle:"font-family:arial;",
        textStyle:"font-family:arial;font-size:14px", 
        id: "alertz4",
        type:'alert',
        icon: 'information'
    }); 
      document.getElementById("judulInp").style.border = "2px solid rgb(205,0,0)"
      document.getElementById("judulInp").style.transition = '0.3s'
      setTimeout(() => {
        document.getElementById("judulInp").style.border = "2px solid purple"
        document.getElementById("judulInp").style.transition = '0.3s'
      }, 3000);
    }else{
      document.getElementById("makePopUp").style.opacity = '0%'
    document.getElementById("makePopUp").style.transition = '0.3s'
    setTimeout(() => {
      document.getElementById("makePopUp").style.display = "none"
      document.title = "Exerr | "+document.getElementById("judulInp").value
    }, 300);
    nm++
    var exer = document.getElementById("exerNum").value;
    var wn = exer++
    for (let i = 1; i < exer; i++){
    var cox = document.createElement("div");
    cox.innerHTML = `<textarea id="textarea`+i+`" style="height: 80px;width: 300px;font-size:12px;display:none"></textarea>`
    document.body.appendChild(cox)
    var wn = document.createElement("div");
    wn.innerHTML = `<div class="exercise">
      <br>
<div class="number">`+i+`</div>
<label for="quest`+i+`">Question</label>
<br>
<textarea spellcheck="false" oninput="fullFill('`+i+`')" id="quest`+i+`"></textarea>
<br>
<br>
<label for="">Answer Key</label>
<div class="keybox">
  <div class="abcGroup">
 <label for="checkA`+i+`" id="uiA`+i+`" onclick="makeAnswer(`+i+`,'A')" class="opt">A</label>
 <label for="checkB`+i+`" id="uiB`+i+`" onclick="makeAnswer(`+i+`,'B')" class="opt">B</label>
 <label for="checkC`+i+`" id="uiC`+i+`" onclick="makeAnswer(`+i+`,'C')" class="opt">C</label>
 <label for="checkD`+i+`" id="uiD`+i+`" onclick="makeAnswer(`+i+`,'D')" class="opt">D</label>
 <input type="checkbox" style="display: none;" id="checkA`+i+`">
 <input type="checkbox" style="display: none;" id="checkB`+i+`">
 <input type="checkbox" style="display: none;" id="checkC`+i+`">
 <input type="checkbox" style="display: none;" id="checkD`+i+`">
 </div>
 <div class="textGroup">
  <label style="line-height:70px;margin-left:40px;">or</label>
  <input onclick='inputAnswer()' style="margin-left:45px;border: 1px solid rgb(83, 6, 83);height: 23px;outline: none;border-radius: 20px;">
 </div>
</div>
</div>`
document.getElementById("centerer").appendChild(wn);
}
    }
  }
  function downloadFile(){
    var fileName = document.getElementById("judulInp")
    var fileContent = document.getElementById("allTotal")
    if(fileName.value === "" || fileContent.value ==="")
    alert("Please enter File name and content");
  else{
    var e = fileContent.value;
    var c = document.createElement("a");
    c.download = fileName.value + ".html";
    var t = new Blob([e], {
    type: "text/html"
    });
    c.href = window.URL.createObjectURL(t);
    c.click();
    }
    }
    function inputAnswer(){
      Stechal({
        title: "Sorry!",
        text: "Essay questions is not yet available. We are still developing this feature. ",
        id: "error1",
        icon: "warning",
        type: "alert",
        button: "OK",
        textStyle: "margin-top:5px",
        buttonStyle: "margin-top: 8px"
      })
    }

    function bodyLoader(){
    setTimeout(() => {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    }, 500);
    }
    function removePopup(){
      var popup = document.getElementById("myPopup");
      popup.style.opacity = '0%'
        popup.style.transition = '0.4s'
        setTimeout(() => {
          popup.style.display = 'none'
        }, 400);
        
    }