function date(unixTime,flag="n"){
    let d = new Date(unixTime*1000)
    let Y = d.getFullYear()
    let M = d.getMonth()+1 <10 ? "0" +(d.getMonth()+1) :d.getMonth()+1
    let D = d.getDate()<10 ? "0" +d.getDate():d.getDate()
    let H =   d.getHours()<10 ? "0"+d.getHours():d.getHours()
    let i = d.getMinutes()<10 ? "0"+d.getMinutes():d.getMinutes()
    let s = d.getSeconds()<10 ? "0"+d.getSeconds():d.getSeconds()
    let fmtTime = flag ==="n" ? `${Y}-${M}-${D} ${H}:${i}:${s} `:`${Y}年${M}月${D}日 ${H}时${i}分${s}秒 `
    return fmtTime
}

function strtotime(fmtTime){
    let d = new Date(fmtTime)
    return parseInt(d/1000)
    
}

module.exports = {
    date:date,
    totime:strtotime
}