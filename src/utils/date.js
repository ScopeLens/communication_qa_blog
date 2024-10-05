export function handleDate(dateString) {
    const date = new Date(dateString);

// 转换成常见的时间格式
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，所以要+1
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

// 拼接成常见的格式
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}