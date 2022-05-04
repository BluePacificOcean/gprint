export default class PrintMenuItem {
    constructor(){
        this.tag = `button`
        this.title = '打印预览'
    }
    getValue() {
        return 'print'
    }
    isActive(){
        return false
    }
    isDisabled() {
        return false
    }
    exec(editor, value) {
        console.log(editor, value);
        window.print()
        // printJS('view', 'html')
    }
}