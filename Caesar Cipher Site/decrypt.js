var decrypt = function(str, amount) {
	if (amount < 0) {
		return decrypt(str, amount+26);
	}
	var output = '';
	for (var i = 0; i < str.length; i++) {
		var c = str[i];
		if (c.match(/[a-z]/i)) {
			var code = str.charCodeAt(i);
			if((code >= 65) && (code <= 90)){
				var index = code - 65 - amount;
				while (index < 0) {
					index += 26;
				}
			  c = String.fromCharCode((index % 26) + 65);}
			else if ((code >= 97) && (code <= 122)){
				var index = code - 97 - amount;
				while (index < 0) {
					index += 26;
				}
			  c = String.fromCharCode((index % 26) + 97)}
		}
		output += c;
	}
	return output;
}


var caesarWrapper2 = function() {
	var str = document.getElementById('user_input').value;
	var amount = parseInt(document.getElementById('key').value);
	document.getElementById('display').innerHTML = decrypt(str, amount);
}
