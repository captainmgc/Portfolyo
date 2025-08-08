"use client"

import { useId, useState } from 'react'
import { skills, type Skill } from '@/data/skills'
import { Modal } from './Modal'
import { classNames } from '@/utils/classNames'
import { motion, useReducedMotion } from 'framer-motion'
import { BoltIcon, BeakerIcon, CubeIcon, EyeIcon, LockClosedIcon, ServerIcon, ShieldCheckIcon, SparklesIcon, Cog6ToothIcon, CodeBracketIcon } from '@heroicons/react/24/solid'

const iconMap: Record<string, (props: React.SVGProps<SVGSVGElement>) => JSX.Element> = {
  bolt: (p) => <BoltIcon {...p} />, beaker: (p) => <BeakerIcon {...p} />, cube: (p) => <CubeIcon {...p} />, eye: (p) => <EyeIcon {...p} />, 'lock-closed': (p) => <LockClosedIcon {...p} />, server: (p) => <ServerIcon {...p} />, 'shield-check': (p) => <ShieldCheckIcon {...p} />, sparkles: (p) => <SparklesIcon {...p} />, 'cog-6-tooth': (p) => <Cog6ToothIcon {...p} />, code: (p) => <CodeBracketIcon {...p} />
}

export function Planet(skill: Skill) {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const tooltipId = useId()
  const Icon = iconMap[skill.icon] ?? CodeBracketIcon
  const prefersReduced = useReducedMotion()

  const base = (
    <button
      type="button"
      className={classNames(
        'relative rounded-full shadow-planet text-white grid place-items-center focus-visible:outline-2',
        'transition-transform duration-150 will-change-transform',
      )}
      style={{
        width: skill.sizePx,
        height: skill.sizePx,
        background: `radial-gradient(60% 60% at 30% 30%, rgba(255,255,255,0.25) 0%, ${skill.color} 100%)`,
        transform: `translateX(${skill.orbitRadiusRem}rem)`
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={() => setOpen(true)}
      aria-describedby={hovered ? tooltipId : undefined}
    >
      <Icon aria-hidden className="w-1/2 h-1/2 opacity-95" />
      <span className="sr-only">{skill.name}</span>
      {hovered && (
        <div
          id={tooltipId}
          role="tooltip"
          className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs px-2 py-1 rounded bg-black/70 ring-1 ring-white/10"
        >
          {skill.name}
        </div>
      )}
    </button>
  )

  return (
    <>
      {prefersReduced ? (
        base
      ) : (
        <motion.div
          className="will-change-transform"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, ease: 'linear', duration: skill.orbitDurationSec }}
          style={{ transformOrigin: 'center' }}
        >
          <motion.div
            whileHover={{ scale: skill.hoverScale }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {base}
          </motion.div>
        </motion.div>
      )}

      <Modal open={open} onClose={() => setOpen(false)} title={skill.name}>
        <p className="mb-3">{skill.description}</p>
        <div className="flex flex-wrap gap-2">
          {skill.projects.map((p) => (
            <span key={p} className="text-xs px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">{p}</span>
          ))}
        </div>
      </Modal>
    </>
  )
}

export function PlanetsOrbits() {
  // Group skills on orbits by index
  const inner = skills.slice(0, 3)
  const middle = skills.slice(3, 7)
  const outer = skills.slice(7)

  return (
    <div className="relative w-full aspect-square max-w-3xl mx-auto" aria-hidden>
      {/* Orbits as rotating rings */}
      {[inner, middle, outer].map((group, idx) => (
        <div
          key={idx}
          className={classNames(
            'absolute inset-0 rounded-full border border-white/10',
            'mx-auto my-auto',
          )}
          style={{
            animation: 'orbit-rotate var(--orbit-duration) linear infinite',
            ['--orbit-duration' as any]: `${[6, 12, 20][idx]}s`,
          }}
          data-motion-paused-item
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {group.map((s) => (
              <Planet key={s.id} {...s} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}