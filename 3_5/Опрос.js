document.getElementById("stud").addEventListener("submit", function (event) {
    sendClick(event)
})

var storedData=null;

function sendClick(e)
{

    e.preventDefault();
    
    var name=document.getElementById("intx").value;
    var birthDate=document.getElementById("inwe").value;
    
    var troubles=Array();
    var troublesCheckBoxes=document.body.getElementsByClassName("req");
    for(var i=0;i<troublesCheckBoxes.length;i++)
    {
        if (troublesCheckBoxes[i].checked)
        {
            troubles.push(troublesCheckBoxes[i].value);
        }
    }

    var studyForm=document.getElementById("inse").value;
    
    
    var faculties=document.body.getElementsByClassName("rad_");
    var faculty="";
    for(var i=0;i<faculties.length;i++)
    {
        if (faculties[i].checked)
        {
            faculty=faculties[i].value;
            break;
        }
    }

    var course=document.getElementById("innum").value;
    var email=document.getElementById("inem").value;

    const obj=
    {
        name: name,
        lastname: lastname,
        model: model,
        operative: operative,
        quality: quality,
        email: email,
        comment: comment
    };

     if (!localStorage.getItem("tableValues"))
     {
        var users=[]; 
        localStorage.setItem('tableValues',JSON.stringify(users));
     }
    var data=[];
     var data=JSON.parse(localStorage.getItem("tableValues"));
     if (data==null)
     {
        data=[];
     }
     data.push(obj);
     localStorage.setItem('tableValues',JSON.stringify(data));
     storedData=JSON.parse(localStorage['tableValues']);
     var modal=document.getElementById("myModal");
     
     modal.style.display="block";
     printTable('tableM',JSON.parse(localStorage['tableValues']));
}

function printTable(tableID,data)
{
    console.log(data);

    
    data.forEach(element => {
        var tableRef = document.getElementById(tableID);
        var newRow = tableRef.insertRow(-1);

        var newCell = newRow.insertCell(0);
        var newText = document.createTextNode(element.name);
        newCell.appendChild(newText);

var newCell=newRow.insertCell(1);
var newText=document.createTextNode(element.lastname)
newCell.appendChild(newText);

        newCell = newRow.insertCell(2);
        var resultModel="";
        if (element.model.length==0)
        {
            resultModel="??????????????????????";
        }
        else
        {
            for(var i=0;i<element.model.length;i++)
            {
                if(i==0){
                    resultModel=resultModel + " " + element.model[i];
                }
                else{
                resultModel=resultModel + "; " + element.model[i];
            }
        }
        }
        newText = document.createTextNode(resultModel);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(3);
        newText = document.createTextNode(element.operative);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(4);
        newText = document.createTextNode(element.quality);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(5);
        newText = document.createTextNode(element.email);
        newCell.appendChild(newText);

        newCell = newRow.insertCell(6);
        newText = document.createTextNode(element.comment);
        newCell.appendChild(newText);

        
    });
}

var cross = document.body.getElementsByClassName("close")[0];

cross.onclick = function (){
    var modal=document.getElementById("myModal");
    modal.style.display="none";
}

window.onclick = function (event) {
    var modal=document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var btn = document.getElementById("myBtn");

// ?????????? ???????????????????????? ???????????????? ???? ????????????, ???????????????? ??????????????????
btn.onclick = function() {
    var modal=document.getElementById("myModal");
  modal.style.display = "block";
}