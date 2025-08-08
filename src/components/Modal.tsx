"use client"

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ReactNode } from 'react'

export function Modal({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
}) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/60 data-[closed]:opacity-0 transition-opacity" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-lg rounded-xl bg-[#0b1020] ring-1 ring-white/10 p-6 shadow-2xl">
          <DialogTitle className="text-lg font-display text-primary mb-2">{title}</DialogTitle>
          <div className="text-mutedText">{children}</div>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-primary/20 hover:bg-primary/30 text-white focus-visible:outline-2"
            >
              Kapat
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}