//Pallindrome check:

var Palin_Check = (str) =>
{
return (str.split("").reverse().join(""))===str?"True":"False"	 
}