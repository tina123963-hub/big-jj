// < !--js定義選單在桌機、手機的顯示與隱藏-- >


const sidebar = document.querySelector('.sidebar')
const overlay = document.querySelector('#mask')

function showSidebar() {
    sidebar.style.display = 'flex'
    overlay.style.display = 'block'
}

function hideSidebar() {
    sidebar.style.display = 'none'
    overlay.style.display = 'none'
}

// const sidebar = document.querySelector('.sidebar')
// const overlay = document.querySelector('.overlay')
// const toggleBtn = document.querySelector('.icon-button')

// // 點擊按鈕 → 顯示 sidebar + 遮罩
// toggleBtn.addEventListener('click', () => {
//     sidebar.style.display = 'flex'
//     overlay.style.display = 'block'
// })

// // 點擊遮罩 → 隱藏 sidebar + 遮罩
// overlay.addEventListener('click', () => {
//     sidebar.style.display = 'none'
//     overlay.style.display = 'none'
// })