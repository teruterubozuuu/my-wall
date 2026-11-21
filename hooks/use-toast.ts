import { useCallback, useSyncExternalStore } from 'react'

export type ToastVariant = 'STATUS' | 'WARNING' | 'CRITICAL' | 'INFO'

export interface ToastData {
  id:          string
  title:       string
  description?: string
  variant?:    ToastVariant
  duration?:   number
}

let toastCounter = 0
let toasts: ToastData[] = []
const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot() {
  return toasts
}

function emitToastChange() {
  listeners.forEach((listener) => listener())
}

export function useToast() {
  const currentToasts = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)

  const toast = useCallback((data: Omit<ToastData, 'id'>) => {
    const id = `toast-${++toastCounter}`
    const duration = data.duration ?? 4000

    toasts = [...toasts, { ...data, id }]
    emitToastChange()

    setTimeout(() => {
      toasts = toasts.filter((item) => item.id !== id)
      emitToastChange()
    }, duration)

    return id
  }, [])

  const dismiss = useCallback((id: string) => {
    toasts = toasts.filter((item) => item.id !== id)
    emitToastChange()
  }, [])

  return { toasts: currentToasts, toast, dismiss }
}
