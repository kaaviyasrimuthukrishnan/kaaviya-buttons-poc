let i=0;
var input=document.getElementById('increment');
var input1=document.getElementById('decrement');
var output=document.getElementById('display');
function inc1()
{

    result=parseInt(output.value);
    i=result+1;
    if(i<=10)
    output.value=i;
    else
    document.getElementById('increment').disable=true;
}
input.addEventListener('click', inc1);
function dec1()
{
    result=parseInt(output.value);
    i=result-1;
    if(i>=0 && i<=10)
    output.value=i;
    else
    document.getElementById('decrement').disable=true;
}
input1.addEventListener('click', dec1)


