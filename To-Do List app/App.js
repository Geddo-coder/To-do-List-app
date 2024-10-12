const button=document.getElementById("create");

const but=document.createElement("button");
but.setAttribute("class","del");
but.innerHTML="delete";

const div=document.querySelector(".container");

const ol=document.createElement("ol");

but.addEventListener("click",()=>{
    if(but.getAttribute("class")=="del")
    {
        but.setAttribute("class","dele");
        window.alert("Delete button activated");
    }
    else
        but.setAttribute("class","del");
});

div.appendChild(ol);

button.addEventListener("click",function(e){
    e.preventDefault();

    let input=document.getElementById("enter").value;
    
    if(input==="Enter new Task")
        window.alert("Enter a task");
    else
    {
        const li=document.createElement("li");
        li.innerHTML=input;
        li.setAttribute("class","list");
        ol.appendChild(li);
        div.appendChild(but);
        li.addEventListener("click",()=>{
            if(but.getAttribute("class")=="del")
            {
                if(li.getAttribute("class")=="list")
                    li.setAttribute("class","list1");
                else
                    li.setAttribute("class","list");
            }
                else if(but.getAttribute("class")=="dele")
                    li.remove();
        });
        
    }
    document.getElementById("enter").value = "Enter new Task";
});

    