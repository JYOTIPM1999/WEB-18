// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

 document.querySelector('form').addEventListener("submit",myFunction)
 function myFunction(){
     event.preventDefault();
     var images=document.querySelector('#image').value;
     var names=document.querySelector("#name").value;
     var batchs=document.querySelector("#batch").value;
     var dsa=document.querySelector("#dsa").value;
     var Skillathon=document.querySelector("#cs").value;
     var coding=document.querySelector("#coding").value;

     var tr=document.createElement('tr');
     var td1=document.createElement('td');
     var studentImage=document.createElement("img");
     studentImage.setAttribute('src',images);
     td1.append(studentImage);
     var td2=document.createElement('td');
     td2.innerText=names;
     var td3=document.createElement('td');
     td3.innerText=batchs
     var td4=document.createElement('td');
     td4.innerText=dsa
     var td5=document.createElement('td');
     td5.innerText=Skillathon
     var td6=document.createElement('td');
     td6.innerText=coding

     var securemarks=Number(dsa)+Number(Skillathon)+Number(coding);
     var percentage=(securemarks/30)*100;

     var td7=document.createElement('td');
     td7.innerText=percentage;
     var td8=document.createElement('td');
     if(percentage<50){
         td8.innerText="Async"
         td8.style.backgroundColor="red";
         td8.style.color="white"
     }
     else{
         td8.innerText="Regular"
         td8.style.backgroundColor="green";
     }
     var td9=document.createElement('td');
     td9.innerText='Delete';
     td9.style.backgroundColor='red';
     td9.addEventListener('click',deleteRow);

     tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)
     document.querySelector("tbody").append(tr)
 }
 function deleteRow(){
     event.target.parentNode.remove();
 }