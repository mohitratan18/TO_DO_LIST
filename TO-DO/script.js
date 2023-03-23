let id="";
selectData();
function managedata()
{              
    document.getElementById('msg').innerHTML="";
    let desc=document.getElementById('desc').value;
    if(desc=="")
    {
        document.getElementById('msg').innerHTML='Please Enter Data!';
    }
    else{
        if(id=='')
        {
            let arr=JSON.parse(localStorage.getItem('name'));
            if(arr==null)
            {
                let data=[desc];
                localStorage.setItem('name',JSON.stringify(data));
            }
            else{
                arr.push(desc);
                localStorage.setItem('name',JSON.stringify(arr));
            }
            document.getElementById('desc').value=" ";
            document.getElementById('msg').innerHTML="Data Inserted !"
            selectData();
        }
    }
}
function selectData()
{
    let arr=JSON.parse(localStorage.getItem('name'));
    let a="";
    for(let k in arr)
    {
        a=a+`<tr class="list"><td>${arr[k]}</td><td><input type="button" value="delete" onclick="deletee(${k})"></td></tr>`
    }
   // console.log(a);
   document.getElementById('root').innerHTML=a;
}
function getData()
{
    let arr=JSON.parse(localStorage.getItem('name'));
    return arr;
}
function deleteall()
{
    localStorage.clear();
    document.getElementById('root').innerHTML="";
    document.getElementById('msg').innerHTML="Data Deleted";
}
function deletee(id)
{
    let arr=JSON.parse(localStorage.getItem('name'));
    arr.splice(id,1);
    localStorage.setItem('name',JSON.stringify(arr));
    selectData();
}
