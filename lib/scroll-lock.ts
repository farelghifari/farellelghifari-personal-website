export function scrollLockToElement(el: HTMLElement) {
  const rect = el.getBoundingClientRect()

  // posisi header yang diinginkan di viewport (lebih ke atas)
  const lockPosition = window.innerHeight * 0.18

  const targetScroll =
    window.scrollY +
    rect.top -
    lockPosition

  window.scrollTo({
    top: targetScroll,
    behavior: "smooth"
  })
}