let n=parseInt(prompt("enter input",0))
let sum=0
let digit=0,count=0
let temp=n
let m=n
while(m!=0)
{
    count+=1
    m=parseInt(m/10)
}
//armstrong number is if the number== sum of power of digits in number
while(temp!=0)
{
    digit=temp%10
    sum+=Math.pow(digit,count)
    temp=parseInt(temp/10)
}
if(n==sum)
document.writeln(`${n} is armstrong number</br>`)
else
document.writeln(`${n} is not armstrong number</br>`)