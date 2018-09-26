import $ from "n-zepto"

async function getData(json){
	let msg
	return new Promise((resolve,reject)=>{
		console.log(json)
		$.ajax({
			type: 'get',
			url: json.url,
			data: json.post,
			dataType: "json",
			async: true,
			success: function(data) {
				msg = data;
				console.log(msg)
				resolve(msg)
			},
			error: function(data, status, e) {
				console.log("获取数据出错" + e);
				console.log(json)
				reject(null)
			},
			timeout:5000
		});
	})

	// try {
	// 	$.ajax({
	// 		type: 'get',
	// 		url: json.url,
	// 		data: json.post,
	// 		dataType: "json",
	// 		async: true,
	// 		success: function(data) {
	// 			msg = data;
	// 		},
	// 		error: function(data, status, e) {
	// 			console.log("获取数据出错" + e);
	// 		},
	// 		timeout:1000
	// 	});
	
		
	// } catch (error) {
	// 	console.log(`http请求出错`)
	// 	console.log(error)
	// }

	// console.log(json)
	// console.log(msg)
	// return msg;
}

window.$getData = getData;