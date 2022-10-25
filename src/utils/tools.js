import { debounce, throttle } from "lodash-es";
import { ElMessage } from "element-plus"

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
	if (!source && typeof source !== 'object') {
		throw new Error('error arguments', 'deepClone')
	}
	const targetObj = source.constructor === Array ? [] : {}
	Object.keys(source).forEach(keys => {
		if (source[keys] && typeof source[keys] === 'object') {
			targetObj[keys] = deepClone(source[keys])
		} else {
			targetObj[keys] = source[keys]
		}
	})
	return targetObj
}
/**
 * 将url的数据转换成object
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
	const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
	if (!search) {
		return {}
	}
	const obj = {}
	const searchArr = search.split('&')
	searchArr.forEach(v => {
		const index = v.indexOf('=')
		if (index !== -1) {
			const name = v.substring(0, index)
			const val = v.substring(index + 1, v.length)
			obj[name] = val
		}
	})
	return obj
}
/**
 * 把对象转换成get请求需要的url
 * @param {Object} params
 * @returns {String}
 */
export function paramsSerializer(params) {
	let result = [];
	for (let field in params) {
		if (params[field] === undefined) {
			result.push(`${field}=`);
			continue;
		}
		if (Array.isArray(params[field])) {
			result.push(params[field].map(item => `${field}=${item}`).join("&"));
		} else {
			result.push(`${field}=${params[field]}`);
		}
	}
	return result.join("&");
}

export const countStatistics = (n) => {
	//统计字数
	/*	@统计规则：
			中文 	+1
			图片标签 +1
			英文		+1/2
	*/
	let temp = n.replace(/<\/?.+?>/g, '');
	let result = temp.replace(/ /g, ''); //result为获取冲文字得到后的内容，去除空格
	let zh = temp.replace(/[a-zA-Z]+/g, ''); //去除英文
	let imageLabel = n.match(/<img[^>]+>/g); //图片标签：type:Array
	let imageLength;
	if (imageLabel) {
		imageLength = imageLabel.length;
	}
	if (!imageLabel) {
		imageLength = 0;
	}
	return imageLength + zh.length + (result.length - zh.length) / 2;
}

// export const debounce = (fn, delay = 300) => {
// 	let timer = null;
// 	return function () {
// 		if (timer) clearTimeout(timer);
// 		timer = setTimeout(() => {
// 			fn.apply(this, arguments);
// 			timer = null;
// 		}, delay);
// 	};
// }

// export const throttle = (fn, delay = 1000) => {
// 	var timer = null;
// 	return function () {
// 		if (timer) return;
// 		timer = setTimeout(() => {
// 			fn.apply(this, arguments);
// 			timer = null;
// 		}, delay);
// 	};
// }

export const assign = function (objs) {
	return Object.assign(...objs)
}

export const ArrayKeysToObject = function (Arr, Interface) {
	let _project = {};
	let i;
	for (i in Arr) {
		if (Interface.includes(i)) {
			_project[i] = Arr[i]
		}
	}
	return _project
}

export function copy(text) {
	let res = false;
	if (navigator.clipboard) {
		console.log("能够复制");
		navigator.clipboard.writeText(text)
		res = true
	} else {
		const textareaEl = document.createElement("textarea");
		textareaEl.setAttribute("readonly", "readonly"); // 防止手机上弹出软键盘
		textareaEl.style.position = "absolute";
		textareaEl.style.left = "-100vw";
		textareaEl.value = text;
		document.body.appendChild(textareaEl);
		textareaEl.select();
		res = document.execCommand("copy");
		document.body.removeChild(textareaEl);
	}
	return res
}

export function PlusElCopy(text) {
	const success = copy(text)
	if (success) {
		ElMessage({
			type: 'success',
			message: 'copy success',
			grouping: true,
			showClose: true,
		})
	}
}

export function downloadFile(file) {
	const a = document.createElement('a');
	const url = window.URL.createObjectURL(file);
	a.href = url;
	a.download = file.name;
	a.click();
	window.URL.revokeObjectURL(url);
}

export function fileToUrl(file) {
	const url = window.URL.createObjectURL(file);
	window.URL.revokeObjectURL(url);
	return url;
}

/**
 * 计算百分比
 * @param   {number} num   分子
 * @param   {number} total 分母
 * @returns {number} 返回数百分比
 */
export function Percentage(num, total) {
	if (num == 0 || total == 0) {
		return 0;
	}
	return Math.round(num / total * 10000) / 100.00;// 小数点后两位百分比
}
// 截断中间部分 多用于hash地址
export function truncation(address, startNum = 6, endNum = 6, separator = '****') {
	if (address.length <= startNum + endNum) return address
	return `${address.slice(0, startNum)}${separator}${address.slice(-endNum)}`
}

// 根据key查找object中的值
export function ObjectFindKey(obj, key) {
	// const keys = Object.keys(obj)
	// const values = Object.values(obj)
	// const index = keys.indexOf(key)
	// return values[index] || null
	for (let k in obj) {
		if (k == key) return obj[k];
	}
	return null;
}
// 时间补零
export function ex0(num) {
	if (num < 0 || num >= 10) {
		return "" + num;
	} else if (num == "0" || num == 0) {
		return "00";
	} else {
		return "0" + num;
	}
}
// 数组累加
export function exadd(arr) {
	function ex(i) {
		return i >= arr.length ? 0 : arr[i] + ex(i + 1)
	}
	return ex(0)
}
// 判断对象是否有某项属性
export function hasProperty(obj, key) {
	return key in obj;
}
// 取出对象中的key值
export function getObjProperty(obj, key) {
	return key in obj ? obj[key] : void 0;
}

export const sleep = (delay = 2000) =>
	new Promise((resp) => setTimeout(() => resp(), delay));

export const _debounceFn = (fn, wait = 300, max = 3000) => debounce(
	fn,
	wait,
	{
		leading: true,
		maxWait: max,
		trailing: false,
	}
)
export const _throttleFn = (fn, wait = 300) => throttle(
	fn,
	wait,
	{
		leading: true,
		trailing: true,
	}
)
export function jumpToAnchor(anchorId) {
	const dom = document.querySelector(`#${anchorId}`);
	console.log('jumpToAnchor dom',dom);
	if (dom) {
		dom.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "nearest",
		});
	}
}
