import path from 'path'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import chokidar from 'chokidar'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const watchJsonFile = path.resolve(__dirname, `watchJson.json`)

const watchDir = path.resolve(__dirname, `../articles`)

console.log(`实时监控目录[ ${watchDir} ]变化, 并重新生成导航数据`)

const watcher = chokidar.watch(watchDir, {
  // 忽略软连接文件的监听
  followSymlinks: false,
  // 忽略启动时的监听
  ignoreInitial: true,
  awaitWriteFinish: {
    // 变动之后，只有在1分钟内没有再发生变化，才触发回调函数
    stabilityThreshold: 60000,
    // 轮询间隔1分钟
    pollInterval: 60000,
  },
  // 忽略代码文件和静态资源文件的变化监听
  ignored: [/.+\.(vue|js|ts|jsx|tsx|png|jpg|jpeg|gif|svg)/],
})

watcher.on('all', (event, path) => {
  if (path.match(/.+\/(demo|asserts)\/.*$/)) {
    // 所有资源路径中包含demo和asserts文件夹的都会手动触发vitepress更新
    return
  }
  console.log(`检测到文件/文件夹变化: ${event}, ${path}, 正在手动触发vitepress重启...、\r\n`)
  // 监听到变化，则将最新时间重写到watchJsonFile中，此时会触发vitepress重启
  writeFileSync(watchJsonFile, `{"updateTime":${new Date().getTime()}}`)
})
