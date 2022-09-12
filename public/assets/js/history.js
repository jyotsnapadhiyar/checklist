var firebaseConfig = {
    apiKey: "AIzaSyCtFlIgLHOvliDQpsVW0YnZJZ7xVANICpk",
    authDomain: "checklist-379ea.firebaseapp.com",
    databaseURL: "https://checklist-379ea-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "checklist-379ea",
    storageBucket: "checklist-379ea.appspot.com",
    messagingSenderId: "248915298508",
    appId: "1:248915298508:web:4424f89a61e04ba9e75a69",
    measurementId: "G-YR85WETH2H"
  };
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.database();
refATM = database.ref("ATM")
refBRANCH = database.ref("BRANCH")

var historyType = $("select[class=history-select]");
var historyCode = $(".history_code_dropdown");
var historyName = $(".history_name_dropdown");

historyType.on("change", function(e){
    checkType()
})

function checkType(){
    var value = $('#history-select').val()
    ref = database.ref(value)

    ref.on('value', function (snapshot){
        var did = snapshot.val()
        var didObj = Object.keys(did)
        var didObjLength = didObj.length
        var didObjarray = []
        var html = '<div class=\"history_code_dropdown\">'
        html+='<select style=\"width:100%;\" id=\"history_code\" class=\"history-code-select\">'
        for(let i=0; i<didObjLength; i++){
            didObjValue = snapshot.child(didObj[i]).val()
            didObjarray.push(Object.keys(didObjValue))
            html+= '<option>'+didObj[i]+'</option>'
        }
        html+='</select>'
        html+='</div>'
        document.getElementById('history_code_dropdown').innerHTML = html
    
        // // dropdown2
        var didObjarrayLenght = didObjarray.length
        var html2 = '<div class=\"history_name_dropdown\">'
        html2+='<select style=\"width:100%;\" id=\"history_name\" class=\"history-code-select\">'
        for(let i=0; i<didObjarrayLenght; i++){
            html2+= '<option>'+didObjarray[i]+'</option>'
        }
        html2+='</select>'
        html2+='</div>'
        document.getElementById('history_name_dropdown').innerHTML = html2
    })
}

historyCode.on("change", function(e){
    var codeValue = $('#history_code').val()
    var typeValue = $('#history-select').val()
    var ref = database.ref(typeValue + '/' + codeValue)
    ref.on('value', function(snapshot){
        var snap = snapshot.val()
        var key = Object.keys(snap)
        document.getElementById('history_name').value = key
    })
    setTimeout(() => {
        createTable()
    }, 2500);
})

historyName.on("change", function(e){
    var nameValue = $("#history_name").val()
    var typeValue = $("#history-select").val()
    var ref = database.ref(typeValue)
    ref.on('value', function(snapshot){
        var snap = snapshot.val()
        var keys = Object.keys(snap)
        var keysLength = keys.length
        for(let i = 0; i < keysLength; i++){
            var keysData = database.ref(typeValue).child(keys[i])
            keysData.on('value', function(snapshot){
                var snap2 = snapshot.val()
                var KeysValue = Object.keys(snap2)
                if(KeysValue == nameValue){
                    document.getElementById('history_code').value = keys[i]
                }
            })

        }
    })
    setTimeout(() => {
        createTable()
    }, 2500);
})

function createTable(){
    var typeValue = $("#history-select").val()
    var codeValue = $('#history_code').val()
    var nameValue = $("#history_name").val()
    var ref = database.ref(typeValue).child(codeValue).child(nameValue)
    ref.on('value', function(snapshot){
        
        var snap = snapshot.val()
        var keys = Object.keys(snap)
        var keysLength = keys.length
        var html = '<tbody>';
        for(let i = 0; i < keysLength; i++){
            var child = snapshot.child(keys[i]).val()
            var childKeys = Object.keys(child)
            var childKeysLength = childKeys.length
            j = i+1
            html+= '<tr>'
            html+= '<th scope=\'row\'>' + j + '</th>'
            html+= '<td style="width: 9%">' + keys[i] + '</td>'
            for( let z = 0; z < childKeysLength; z++){
                var childKeysValue = snapshot.child(keys[i]).child(childKeys[z]).val()
                var myJson = JSON.stringify(childKeysValue)
                html+= '<td>' + '<p> <b class="font-weight-bold">' + childKeys[z] + '</b> </p>' + myJson + '</td>'
            }
            html+= '</tr>'
        }
        html+='</tbody>'
        document.getElementById('history-table').innerHTML = html
    })
}
checkType()
setTimeout(() => {
    createTable()
}, 2500);