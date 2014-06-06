function convert() {
	// 获取每行字数
	var num_n;
	var n = document.getElementById('n');
	if(!n) {
		num_n = 0;
	} else {
		num_n = Number(n.value) || 0;
	}
	
	// 获取输入
	var input = document.getElementById("input");
	if(!input) {
		return;
	}

	// 输出
	var output = document.getElementById('output');
	if(!output){
		return;
	}

	var input_data = input.value;
	console.log(input_data);
	// 匹配 换行符 
	var re_parm = new RegExp('\r\n');
	if (!re_parm.test(input_data)){
		re_parm = new RegExp('\n');
	} 
	if (!re_parm.test(input_data)) {
		alert("木有找到换行符…… 太囧了……");
		return;
	}
	// 将所有的换行符去掉，并保存在数组中
	var output_array = input_data.split(re_parm);
	// 判断每行的长度。若长度小于num_n，则插入换行符
	var output_data = '';
	for (var j = 0; j < output_array.length; j++) {
		if (String(output_array[j]).length < num_n) {
			output_data += output_array[j] + "\n";
		} else {
			output_data += output_array[j];
		}
	}
	// 输出结果

	output.value = output_data;
	console.log(output_data);
}

function prepareClick() {
	var submit = document.getElementById("submit");
	submit.onclick = function() {
		convert();
	}
}

window.onload = prepareClick;