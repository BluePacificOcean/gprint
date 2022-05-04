export class DateMenuItem {
    constructor(){
        this.tag = `button`
        this.title = '插入日期'
    }
    getValue() {
        return 'date'
    }
    isActive(){
        return false
    }
    isDisabled() {
        return false
    }
    exec(editor, value) {
        let date = new Date()
        let month = date.getMonth()+1
        let day = date.getDate()
        if(month < 10){
            month = `0${month}`
        }
        if(day < 10) {
            day = `0${day}`
        }
        editor.insertText(`${date.getFullYear()}-${month}-${day}`)
    }
}

export class DateTimeMenuItem extends DateMenuItem {
    constructor(){
        super()
        this.title = '插入日期时间'
    }
    getValue() {
        return 'date'
    }
    exec(editor, value) {
        let date = new Date()
        let month = date.getMonth()+1
        let day = date.getDate()
        let hour = date.getHours()
        let min = date.getMinutes()
        let sec = date.getSeconds()
        if(month < 10){
            month = `0${month}`
        }
        if(day < 10) {
            day = `0${day}`
        }
        if (hour < 10) {
            hour = `0${hour}`
        }
        if (min < 10) {
            hour = `0${min}`
        }
        if (sec < 10) {
            sec = `0${sec}`
        }
        editor.insertText(`${date.getFullYear()}-${month}-${day} ${hour}:${min}:${sec}`)
    }
}