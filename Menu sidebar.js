// < !--js定義選單在桌機、手機的顯示與隱藏-- >
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    // 點擊 body 時，如果點到 sidebar 以外就關閉
    document.addEventListener('click', outsideClickListener)
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    document.removeEventListener('click', outsideClickListener)
}
function outsideClickListener(event) {
    // 如果點擊目標不是 sidebar 或 sidebar 內的元素
    if (!sidebar.contains(event.target) && !event.target.matches('.icon-button')) {
        hideSidebar()
    }
}

// 選單出現、半透明遮罩出現
const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('.overlay')
const toggleBtn = document.querySelector('.icon-button')

// 點擊按鈕 → 顯示 sidebar + 遮罩
toggleBtn.addEventListener('click', () => {
    sidebar.style.display = 'flex'
    overlay.style.display = 'block'
})

// 點擊遮罩 → 隱藏 sidebar + 遮罩
overlay.addEventListener('click', () => {
    sidebar.style.display = 'none'
    overlay.style.display = 'none'
})