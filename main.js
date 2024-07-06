task=document.getElementById('text')
btn=document.getElementById('btn')

//create task
let tasks
if(localStorage.tasks!=null){
    tasks=JSON.parse(localStorage.tasks)
}
else{
    tasks=[]
}
btn.onclick=function(){
   
    data={
        input: task.value,
        f:Boolean(1)
    }
    tasks.push(data)
    localStorage.setItem("tasks",JSON.stringify(tasks))
    clearinputs()
    showdata()
}

function clearinputs(){
    task.value=''
}
function showdata(){
    let outputs=''
    let out=document.getElementById('out')
    for (let i = 0; i < tasks.length; i++) {
        outputs+=`
            <div class="task">
                    <button id="${i}" class="taskbtn" onclick="line(${i})">${tasks[i].input}</button>
                    <button id="del" onclick="deleteitem(${i})">X</button>
                </div>
    `
    }
    out.innerHTML=outputs 
    for (let i = 0; i < tasks.length ; i++)
        {
             
             if(!tasks[i].f)
             {
                  let th=document.getElementById(i);
                  th.style.textDecoration='line-through';
             }
        }
    deletebtn=document.getElementById('deleteall')
    if(tasks.length>0){
        deletebtn.innerHTML=`
        <button id="btn" onclick="deleteall()" style="width: 520px;">Delete all</button>
        `
    }
    else{
        deletebtn.innerHTML=''
    }

    
}
 
function deleteitem(i){
    tasks.splice(i,1)
    localStorage.tasks=JSON.stringify(tasks)
    showdata()
}
function deleteall(){
    tasks.splice(0)
    localStorage.clear()
    showdata()
}

function line(i){
    t=document.getElementById(i)
    if(tasks[i].f){
        t.style=`
    text-decoration-line: line-through;
    `
    tasks[i].f=Boolean(0)
    }
    else{
        t.style=`
        text-decoration-line: none;
        `  
        tasks[i].f=Boolean(1)
    }
    localStorage.tasks=JSON.stringify(tasks)
}
showdata()