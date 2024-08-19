chrome.runtime.onInstalled.addListener(details => {
  if (details.reason === 'install') {
    chrome.tabs.create({ url: chrome.i18n.getMessage('tutorial') })
  }
})

chrome.tabs.onCreated.addListener(tab => {
  // 判断是否为新标签页，仅在新标签页替换
  if (tab.pendingUrl === 'chrome://newtab/') {
    // 获取储存的设置
    chrome.storage.local.get(null, config => {
      if (config.enabled && config.url) {
        // 替换自定义的链接
        chrome.tabs.update(tab.id, { url: config.url })
      }
    })
  }
})
