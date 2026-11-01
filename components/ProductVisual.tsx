import { Bot, ChefHat, Coffee, CookingPot, Gauge, Heater, House, Mop, PlugZap, SprayCan, Thermometer, Weight, Wind, type LucideIcon } from 'lucide-react'
import type { ProductVisualData, ProductVisualKind } from '@/lib/product-visual'
import ProductPhotoImage from './ProductPhotoImage'
import ProductScenePhoto, { scenePhotoOf } from './ProductScenePhoto'
import { AirVent, AlarmSmoke, BatteryCharging, BellRing, Cctv, Droplet, Droplets, EvCharger, Lock, Phone, Zap } from 'lucide-react'

const ICONS: Record<ProductVisualKind, LucideIcon> = {
  airfryer: ChefHat,
  multicooker: CookingPot,
  'coffee-machine': Coffee,
  'kitchen-scale': Weight,
  'meat-thermometer': Thermometer,
  'smart-plug': PlugZap,
  'air-purifier': AirVent,
  humidifier: Droplets,
  dehumidifier: Droplet,
  doorbell: BellRing,
  'smart-lock': Lock,
  'smoke-alarm': AlarmSmoke,
  'outdoor-camera': Cctv,
  intercom: Phone,
  'home-battery': BatteryCharging,
  'power-station': Zap,
  'ev-charger': EvCharger,
  'robot-vacuum': Bot,
  vacuum: Wind,
  'floor-washer': Mop,
  'carpet-cleaner': SprayCan,
  thermostat: Gauge,
  heater: Heater,
  appliance: House,
}

type VisualSize = 'thumb' | 'card' | 'hero'

const SIZES: Record<VisualSize, { box: string; badge: string; icon: string; brand: string; model: string }> = {
  thumb: { box: '', badge: 'h-9 w-9', icon: 'h-5 w-5', brand: '', model: '' },
  card: {
    box: 'gap-3 px-6',
    badge: 'h-14 w-14',
    icon: 'h-7 w-7',
    brand: 'text-[11px] tracking-[0.25em]',
    model: 'text-base',
  },
  hero: {
    box: 'gap-4 px-8',
    badge: 'h-20 w-20',
    icon: 'h-10 w-10',
    brand: 'text-xs tracking-[0.3em]',
    model: 'text-xl md:text-2xl',
  },
}

/** Rendered width of each size, for the photo's srcset pick. */
const PHOTO_SIZES: Record<VisualSize, string> = {
  thumb: '96px',
  card: '(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw',
  hero: '(min-width: 768px) 448px, 100vw',
}

interface ProductVisualProps extends ProductVisualData {
  /** 'thumb' (up to ~100px: icon only), 'card' (default) or 'hero'. */
  size?: VisualSize
  /** Accessible name; omit when the product name is already next to it. */
  label?: string
  className?: string
}

/**
 * Product visual, never an Amazon image (the site may not display one
 * without the Amazon product API): the manufacturer's official photo in
 * its Homenura frame when the manifest has one, credited on the frame's
 * bottom edge (thumbnails: by the block, see PhotoCredits), else a neutral
 * card (category icon, brand, model). Fills its parent: the parent sets
 * the size and the square aspect ratio and must be `relative`.
 */
export default function ProductVisual({ brand, model, kind, photo, size = 'card', label, className = '' }: ProductVisualProps) {
  if (photo) {
    // Like an Amazon listing grid: hovering the card shows the product in use.
    const hover = size === 'thumb' ? undefined : scenePhotoOf(photo.gallery)
    return (
      <div data-product-visual={kind} data-product-photo={photo.id} className={`absolute inset-0 overflow-hidden bg-brand-50 ${className}`}>
        <ProductPhotoImage photo={photo} sizes={PHOTO_SIZES[size]} className="h-full w-full object-contain" />
        {hover && (
          <ProductScenePhoto
            photo={hover}
            sizes={PHOTO_SIZES[size]}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
        {size !== 'thumb' && (
          // The frame keeps its bottom-left corner free for the credit (the wordmark sits bottom-right).
          <span
            className={`pointer-events-none absolute bottom-[6%] left-[5.5%] translate-y-1/2 leading-none text-slate-600 ${size === 'hero' ? 'text-[11px]' : 'text-[10px]'}`}
          >
            {photo.credit}
          </span>
        )}
      </div>
    )
  }

  const Icon = ICONS[kind]
  const s = SIZES[size]
  const a11y = label ? { role: 'img' as const, 'aria-label': label } : { 'aria-hidden': true as const }

  return (
    <div
      {...a11y}
      data-product-visual={kind}
      className={`absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-accent-50 text-center ${s.box} ${className}`}
    >
      <span
        className={`flex ${s.badge} shrink-0 items-center justify-center rounded-full bg-white text-brand-600 shadow-sm ring-1 ring-brand-100`}
      >
        <Icon className={s.icon} strokeWidth={1.75} aria-hidden="true" />
      </span>
      {size !== 'thumb' && (
        <span className="flex w-full flex-col items-center gap-1">
          <span className={`font-bold uppercase text-brand-700 ${s.brand}`}>{brand}</span>
          <span className={`font-semibold leading-tight text-slate-900 line-clamp-2 ${s.model}`}>{model}</span>
        </span>
      )}
    </div>
  )
}
