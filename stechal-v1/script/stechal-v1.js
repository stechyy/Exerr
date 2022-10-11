var setKlik = "";
function Stechal({
    title,
    titleStyle,
    text,
    textStyle,
    button,
    buttonStyle,
    type,
    id,
    icon,
    onTrueClick
}){
    console.log("stechal-v1 is on function")
    setKlik = onTrueClick; 
    if (type == "confirm") {
        var sconfirm = document.createElement("div");
    sconfirm.innerHTML = `<div id="popup_`+id+`" class="stechal-dark">
<div id="stechal_`+id+`" class="stechal">
    <div id='icon`+id+`' class='icon'></div>
    <div class="stechal-titleHolder">
        <h1 style="`+titleStyle+`" class="stechal-title">`+title+`</h1>
        <p id='desc' style='`+textStyle+`' class="stechal-description">`+text+`</p>
    </div>
    <div class="stechal-buttonHolder">
        <div class="stechal-buttonChildHolder">
        <button id="stechalButton_`+id+`" onclick="returnCancel('`+id+`')" style='`+buttonStyle+`' class="stechal-cancel-button">Cancel</button>
        <button id="stechalButton_`+id+`" onclick="startAnimation('`+id+`')" style='`+buttonStyle+`' class="stechal-button">`+button+`</button>
    </div>
    </div>
    
</div>
</div>
    `
    document.body.appendChild(sconfirm)
    setTimeout(() => {
        var x= document.getElementById("stechal_"+id+"");
        x.style.display = ''
        x.style.transition = "0.3s"
        x.style.opacity = "100%"
        
    }, 05);
    }
    if (type == "alert") {
        var salert = document.createElement("div");
    salert.innerHTML = `<div id="popup_`+id+`" class="stechal-dark">
<div id="stechal_`+id+`" class="stechal">
    <div id='icon`+id+`' class='icon'></div>
    <div id="stechal-titleHolder_`+id+`" class="stechal-titleHolder">
        <h1 style="`+titleStyle+`" class="stechal-title">`+title+`</h1>
        <p id='desc' style='`+textStyle+`' class="stechal-description">`+text+`</p>
    </div>
    <div class="stechal-buttonHolder">
        <div class="stechal-buttonChildHolder">
        <button id="stechalButton_`+id+`" onclick="startAnimation('`+id+`')" style='`+buttonStyle+`' class="stechal-button">`+button+`</button>
    </div>
    </div>
    
</div>
</div>
    `
    document.body.appendChild(salert)
    setTimeout(() => {
        var x= document.getElementById("stechal_"+id+"");
        x.style.display = ''
        x.style.transition = "0.3s"
        x.style.opacity = "100%"
        
    }, 05);
    }
    if (icon == "success") {
        document.getElementById("icon"+id+"").style.background = "url('stechal-v1/assets-v1/img/suc-ic.png')"
        document.getElementById("icon"+id+"").style.backgroundSize = "contain"
        document.getElementById("icon"+id+"").style.backgroundRepeat = "no-repeat"
        document.getElementById("stechal-titleHolder_"+id+"").style.marginTop = '10px'
    }
    if (icon == "warning") {
        document.getElementById("icon"+id+"").style.background = "url('stechal-v1/assets-v1/img/war-ic.png')"
        document.getElementById("icon"+id+"").style.backgroundSize = "contain"
        document.getElementById("icon"+id+"").style.backgroundRepeat = "no-repeat"
        document.getElementById("stechal-titleHolder_"+id+"").style.marginTop = '10px'
    }
    if (icon == "information") {
        document.getElementById("icon"+id+"").style.background = "url('stechal-v1/assets-v1/img/inf-ic.png')"
        document.getElementById("icon"+id+"").style.backgroundSize = "contain"
        document.getElementById("icon"+id+"").style.backgroundRepeat = "no-repeat"
        document.getElementById("stechal-titleHolder_"+id+"").style.marginTop = '10px'
    }
    if (icon == null) {
        document.getElementById("icon"+id+"").style.display = 'none'
        document.getElementById("stechal-titleHolder_"+id+"").style.marginTop = '30px'
    }
    if (button == null) {
        document.getElementById("stechalButton"+id+"").innerText = "OK"
    }
    if (text == null) {
        document.getElementById("desc").style.display = 'none'
    }
    if (title == null) {
        document.getElementById("popup_"+id+"").style.display = 'none'
    }

    
    
}
function startAnimation(id){
    var x= document.getElementById("stechal_"+id+"");
    x.style.transition = '0.1s'
    x.style.opacity = "0%"
    setTimeout(() => {
        document.getElementById('popup_'+id+'').style.display = 'none' 
        document.getElementById('popup_'+id+'').parentNode.removeChild(document.getElementById('popup_'+id+''))
 }, 200);
//  setKlik()
     
    
    
    
}
function returnCancel(id){
    var x= document.getElementById("stechal_"+id+"");
    x.style.transition = '0.1s'
    x.style.opacity = "0%"
    setTimeout(() => {
        document.getElementById('popup_'+id+'').style.display = 'none' 
        document.getElementById('popup_'+id+'').parentNode.removeChild(document.getElementById('popup_'+id+''))
 }, 200);
}