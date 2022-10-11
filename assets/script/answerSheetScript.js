
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
     if (numQuest == 2) {
        var value = parseInt(v1.innerHTML)+parseInt(v2.innerHTML);
        document.getElementById("valuePopUp").innerHTML = value;
        
     }
     if (numQuest == 3) {
        var value = parseInt(v1.innerHTML)+parseInt(v2.innerHTML)+parseInt(v3.innerHTML);
        
     }
     if (numQuest == 4) {
        var value = parseInt(v1.innerHTML)+parseInt(v2.innerHTML)+parseInt(v3.innerHTML)+parseInt(v4.innerHTML);
        
     }
     if (numQuest == 5) {
        var value = parseInt(v1.innerHTML)+parseInt(v2.innerHTML)+parseInt(v3.innerHTML)+parseInt(v4.innerHTML)+parseInt(v5.innerHTML);
        
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