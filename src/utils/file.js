import { hex_md5 } from "./md5"

// 获取文件名
export function getFileName(name) {
	return name.substring(0, name.lastIndexOf('.'));
}
// 获取 .后缀名
export function getExtensionWithPoint(name) {
	return name.substring(name.lastIndexOf('.'));
}
// 只获取后缀名
export function getExtension(name) {
	return name.substring(name.lastIndexOf('.') + 1);
}
//生成下载文件名
export function downloadName(file) {

	let fileName = file.raw ? file.raw.name : file.name;
	console.log(fileName)
	let md5Name = hex_md5(fileName)
	let name = `${new Date().getTime().toString()}-${md5Name}-${fileName}`
	return name;
	// return fileName
}
export function fileToBase64(file) {
	return new Promise(function (resolve, reject) {
		let reader = new FileReader()
		let imgResult = ''
		reader.readAsDataURL(file)
		reader.onload = function () {
			imgResult = String(reader.result)
		}
		reader.onerror = function (error) {
			reject(error)
		}
		reader.onloadend = function () {
			resolve(imgResult)
		}
	})
}
