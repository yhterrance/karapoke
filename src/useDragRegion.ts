import { getCurrentWindow } from '@tauri-apps/api/window'
import { useCallback } from 'react'
import type { MouseEvent } from 'react'

const NO_DRAG_SELECTOR = [
  'button',
  'input',
  'select',
  'a',
  '[role="button"]',
  '[role="menu"]',
  '[role="menuitem"]',
  '[data-no-drag]',
].join(', ')

function isDragDisabledTarget(target: EventTarget | null): boolean {
  return target instanceof Element && target.closest(NO_DRAG_SELECTOR) !== null
}

export function useDragRegion() {
  return useCallback((event: MouseEvent<HTMLElement>) => {
    if (event.button !== 0) return
    if (isDragDisabledTarget(event.target)) return

    event.preventDefault()
    void getCurrentWindow().startDragging().catch(() => {})
  }, [])
}
