var methods = ['rock','paper','scissors'];


function resultGame(){
var str =document.getElementById('chooseMethod').value;
var choose = str.toLowerCase();
var randomIndex = (Math.floor(Math.random()*3));
var testMethod = methods.includes(choose);
if (testMethod){
var chooseMethod = methods.indexOf(choose);
if(randomIndex==chooseMethod){
alert ('Draw paly one more time !!!!')
}else if(randomIndex==0){
	if(chooseMethod==2){
	alert('you looooooooooooser');
	}else{
	alert('you win');
	}
}else if (randomIndex==1){
    if(chooseMethod==0){
	alert('you looooooooooooser');
	}else{
	alert('you win');
	}
}else if (randomIndex==2){
    if(chooseMethod==1){
	alert('you looooooooooooser');
	}else{
	alert('you win');
	}
}}else {
alert ('you choose wrong rol please choose a role from image');
};
console.log('your choose :' ,choose ,'computer choose :', methods[randomIndex]);

}
