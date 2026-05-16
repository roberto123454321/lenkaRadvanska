export function getBreakpointMobile() {
  return getComputedStyle(document.documentElement).getPropertyValue("--breakpoint-mobile").trim();
}
