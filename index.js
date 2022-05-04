import PrintMenuItem from "./PrintMenuItem.js"
import {DateMenuItem, DateTimeMenuItem} from "./DateMenuItem.js"


// document.body.style.transform = `scale(${1280/window.innerWidth})`
window.print = () => printJS({
    printable: 'view',
    type: 'html'
})

const E = window.wangEditor


E.Boot.registerMenu({
    key: 'print',
    factory() {
        return new PrintMenuItem()
    }
})

E.Boot.registerMenu({
    key: 'date',
    factory() {
        return new DateMenuItem()
    }
})

E.Boot.registerMenu({
    key: 'datetime',
    factory() {
        return new DateTimeMenuItem()
    }
})

// 创建编辑器
const editor = E.createEditor({
    selector: '#view',
    config: {
        placeholder: '请输入',
    },
    mode: 'default' // 或 'simple' 参考下文
})

// 创建工具栏
const toolbar = E.createToolbar({
    editor,
    config: {
        insertKeys: {
            index: 30,
            keys: ['date', 'datetime', 'print']
        },
        excludeKeys: 'fullScreen',
        showFullScreen: false
    },
    selector: '#container-toolbar',
    mode: 'default' // 或 'simple' 参考下文
})