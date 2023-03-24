<template>
  <div id="comment"></div>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const utterances = window.document.createElement('script')
  utterances.type = 'text/javascript'
  utterances.async = true
  utterances.setAttribute('issue-term', 'title')
  utterances.setAttribute(
    'theme',
    [...document.documentElement.classList].includes('dark') ? 'github-dark' : 'github-light'
  )
  utterances.setAttribute('repo', 'fang-kang/note')
  utterances.crossOrigin = 'anonymous'
  utterances.src = 'https://utteranc.es/client.js'
  window.document.getElementById('comment').appendChild(utterances)
  document.querySelector('.VPSwitchAppearance').addEventListener('click', () => {
    const isDark = [...document.documentElement.classList].includes('dark')
    const theme = isDark ? 'github-dark' : 'github-light'
    const message = {
      type: 'set-theme',
      theme: theme,
    }
    const utteranc = document.querySelector('.utterances-frame')
    utteranc.contentWindow.postMessage(message, 'https://utteranc.es')
  })
})
</script>

<style>
.utterances {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 760px;
  margin-left: 0;
  margin-right: auto;
}

.utterances-frame {
  position: absolute;
  left: 0;
  right: 0;
  width: 1px;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  border: 0;
}

.timeline-header {
  display: none !important;
}
</style>
