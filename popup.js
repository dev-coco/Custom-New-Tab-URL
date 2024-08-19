const checkbox = document.querySelector('#switch')
const input = document.querySelector('[type="text"]')

// 监听 checkbox 设置并储存
checkbox.addEventListener('change', e => {
  chrome.storage.local.set({ enabled: e.target.checked })
})

// 监听输入链接设置并储存
input.addEventListener('input', e => {
  chrome.storage.local.set({ url: e.target.value })
})

// 初始化设置
chrome.storage.local.get(null, config => {
  input.value = config.url || ''
  checkbox.checked = config.enabled || false
})
