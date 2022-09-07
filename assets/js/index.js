function setRem() {
  // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改
  const cw = document.documentElement.clientWidth
  // if (cw > 480) {
  //   return
  // }
  const scale = cw / 750;
  document.documentElement.style.fontSize = scale + 'px';
}
setRem();
window.onresize = setRem;