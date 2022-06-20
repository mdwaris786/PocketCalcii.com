let history=document.getElementById('history');

//code for calculation
function calculation(v)
{
    para=document.createElement('p');
    data=v+"="+eval(v);
    para.innerText=data;
    history.appendChild(para);
    return eval(v);
}

//code for backspace
function backspace(b)
{
    return b.slice(0,b.length=-1);
}

//code for delete
function del(d)
{
    return d.slice(0,d.length=0);
}
