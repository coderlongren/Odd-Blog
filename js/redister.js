window.onload = function() {
	var register = document.getElementsByClassName("register_center")[0];
	var regSpan = register.getElementsByTagName("span");
	var regS = register.getElementsByTagName("s");
	gainFocus(regSpan, regS);
	loseFocus(regSpan, regS);
};



function gainFocus(objSpan, objS) {
	var regUsername = document.getElementsByClassName("regUsername")[0];
	
	regUsername.onfocus = function() {
		objSpan[0].innerHTML = "please input username";
		objS[0].className = "warn";
	};
	var regPassword = document.getElementsByClassName("regPassword")[0];
	regPassword.onfocus = function() {
		objSpan[1].innerHTML = "please input password";
		objS[1].className = "warn";
	};
	var regRelPassword = document.getElementsByClassName("regRelPassword")[0];
	regRelPassword.onfocus = function() {
		objSpan[2].innerHTML = "please input password";
		objS[2].className = "warn";
	};
	var regMail = document.getElementsByClassName("regMail")[0];
	regMail.onfocus = function() {
		objSpan[3].innerHTML = "please input email";
		objS[3].className = "warn";
	};
	var regPhone = document.getElementsByClassName("regPhone")[0];
	regPhone.onfocus = function() {
		objSpan[4].innerHTML = "please input Number";
		objS[4].className = "warn";
	};
}

//失去焦点事件
function loseFocus(objSpan, objS) {
	//账号失去焦点事件
	accountLoseFocus(objSpan[0], objS[0]);
	//密码失去焦点事件
	passwordLoseFocus(objSpan[1], objS[1]);
	//确认密码失去焦点事件
	relPasswordLoseFocus(objSpan[2], objS[2]);
	//邮箱确认失去焦点事件
	mailLoseFocus(objSpan[3], objS[3]);
	//电话失去焦点事件
	phoneLoseFocus(objSpan[4], objS[4]);
}



//账号失去焦点事件
function accountLoseFocus(obj1, obj2) {
	var regUsername = document.getElementsByClassName("regUsername")[0];
	regUsername.onblur = function() {
		if(regUsername.value!="") {
				obj1.innerHTML = "";
				obj2.className = "correct";
		}
	};
}
//密码失去焦点
function passwordLoseFocus(obj1, obj2) {
	var regPassword = document.getElementsByClassName("regPassword")[0];
	regPassword.onblur = function() {
		var flag = regPassword.value.search(/\s/);
		if(regPassword.value!=""&&flag==-1) {
			obj1.innerHTML = "";
			obj2.className = "correct";
		} else {
			obj1.innerHTML = "must be word or number!";
			obj2.className = "error";
		}
	};
}
//密码失去焦点
function relPasswordLoseFocus(obj1, obj2) {
	var regRelPassword = document.getElementsByClassName("regRelPassword")[0];
	var regPassword = document.getElementsByClassName("regPassword")[0];
	regRelPassword.onblur = function() {
		if(regRelPassword.value!=""&&regPassword.value==regRelPassword.value) {
			obj1.innerHTML = "";
			obj2.className = "correct";
		} else {
			obj1.innerHTML="password is not correct";
			obj2.className = "error";
		}
	};
}
//邮箱失去焦点事件
function mailLoseFocus(obj1, obj2) {
	var regMail = document.getElementsByClassName("regMail")[0];
	regMail.onblur = function() {
//		alert("dfgdfgdgdfgdfgfghfgh");
		var flag = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(regMail.value);
		if(regMail.value!=""&&flag) {
			obj1.innerHTML = "";
			obj2.className = "correct";
		} else {
			obj1.innerHTML = "email is wrong";
			obj2.className = "error";
		}
	};
}
//电话失去焦点事件
function phoneLoseFocus(obj1, obj2) {
	var regPhone = document.getElementsByClassName("regPhone")[0];
//	if(/^1[34578]\d{9}$/.test("15071415116")){ 
//      alert("手机号码有误,请重填");  
//  } 
	regPhone.onblur = function() {
//		var flag = /^1[34578]\d{9}$/.test(regPhone);
//		alert("dfgdgdfg");
		if(/^1[34578]\d{9}$/.test(regPhone.value)) {
			obj1.innerHTML = "";
			obj2.className = "correct";
		} else {
			obj1.innerHTML = "please input correct number";
			obj2.className = "error";
		}
	};
}

