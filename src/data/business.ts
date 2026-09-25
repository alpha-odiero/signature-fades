import beardGroomingImage from '../assets/beared grooming.jpg'
import completeGroomingImage from '../assets/complete grooming.jpg'
import facialTreatmentImage from '../assets/facial tratment.jpg'
import footSoakImage from '../assets/foot soack.jpg'
import heroBackground from '../assets/hero backgroung.jpg'
import heroImage from '../assets/hero sider.jpg'
import kidsHairImage from '../assets/kids hair.jpg'
import lineUpsImage from '../assets/line ups and edges.jpg'
import manicureImage from '../assets/manicure.jpg'
import massageImage from '../assets/massage.jpg'
import nailCleaningImage from '../assets/nail cleaning.jpg'
import pedicureImage from '../assets/pedicure.jpg'
import secondaryMassageImage from '../assets/massage..jpg'
import signatureCutImage from '../assets/sig.jpg'
import signatureStyleImage from '../assets/sugnature.jpg'
import styleImage from '../assets/style.jpg'
import vImage from '../assets/v.jpg'

export type Service = {
  name: string
  description: string
  longDescription: string
  image: string
  details?: string[]
  idealFor: string[]
}

export type Feature = {
  title: string
  description: string
}

export type GalleryImage = {
  image: string
  alt: string
  className: string
}

export type OpeningHours = {
  day: string
  hours: string
}

export type Faq = {
  question: string
  answer: string
}

export const routes = {
  home: '/',
  services: '/services',
  gallery: '/gallery',
  about: '/about',
  contact: '/contact',
} as const

export const business = {
  name: 'Signature Fadez Barber Shop',
  shortName: 'Signature Fadez',
  eyebrow: 'Professional barbering & grooming',
  tagline: 'Sharp Cuts. Clean Lines. Signature Style.',
  description:
    'A modern grooming destination in Murang’a, Kenya, offering professional haircuts, beard grooming, facials, nail care, massage, and other personal grooming services.',
  address: 'Near General Hawkers, Murang’a, Kenya',
  phone: '0745 437817',
  phoneHref: 'tel:+254745437817',
  whatsappUrl: 'https://wa.me/254745437817',
  hours: 'Monday–Saturday, 9:00 AM – 8:00 PM',
  closedDay: 'Sunday · Closed',
  mapsUrl: 'https://maps.app.goo.gl/XdRG9Zvpnmgar4fh9',
  reviewUrl: 'https://www.google.com/search?q=Signature+Fadez+Barber+Shop+Muranga+Kenya',
  heroImage,
  heroBackground,
}

export const navigation = [
  { label: 'Home', href: routes.home },
  { label: 'Services', href: routes.services },
  { label: 'Gallery', href: routes.gallery },
  { label: 'About', href: routes.about },
  { label: 'Contact', href: routes.contact },
]

export const services: Service[] = [
  {
    name: 'Haircuts & Fades',
    description: 'Professional cuts tailored to your preferred style.',
    longDescription:
      'Start with the shape you want, then refine the details around your hairline, temples, and neckline. Signature Fadez keeps the cut balanced, clean, and easy to maintain between visits.',
    details: ['Signature Fade', 'Low / Mid / High Fade', 'Classic & Kids Cuts'],
    idealFor: ['A clean reset', 'A sharper everyday look', 'A style made for you'],
    image: signatureCutImage,
  },
  {
    name: 'Beard Grooming',
    description: 'Keep your beard clean, sharp, and well-defined.',
    longDescription:
      'A well-shaped beard completes the whole look. We trim, fade, and define the beard to suit your face and finish, leaving the kind of clean detail that makes a haircut feel complete.',
    details: ['Beard Trim & Shaping', 'Beard Fade', 'Clean & Hot Towel Shave'],
    idealFor: ['A polished finish', 'A sharper silhouette', 'A fresh beard reset'],
    image: beardGroomingImage,
  },
  {
    name: 'Line Ups & Edge Ups',
    description: 'Precision detailing around the hairline and beard.',
    longDescription:
      'The finishing details make the difference. We shape the forehead, temples, sideburns, and beard line with a steady hand so the overall cut looks intentional from every angle.',
    details: ['Forehead & Temples', 'Sideburns', 'Beard Line'],
    idealFor: ['A crisp hairline', 'A polished profile', 'A precise finish'],
    image: lineUpsImage,
  },
  {
    name: 'Facials & Skin Care',
    description: 'Refresh and maintain healthy-looking skin.',
    longDescription:
      'A focused facial can make the rest of your grooming feel complete. Deep cleansing, steam, and careful finishing help you leave feeling refreshed while keeping your routine simple.',
    details: ['Deep Cleansing', 'Steam & Scrub', 'Blackhead Removal'],
    idealFor: ['A fresh reset', 'A pre-event refresh', 'A relaxing grooming break'],
    image: facialTreatmentImage,
  },
  {
    name: 'Manicure & Pedicure',
    description: 'Professional hand and foot grooming.',
    longDescription:
      'Good grooming is about the details you notice and the details you do not. Nail trimming, shaping, and cuticle care give your hands and feet a cleaner, more considered finish.',
    details: ['Nail Trim & Shape', 'Cuticle Care', 'Manicure + Pedicure'],
    idealFor: ['A clean everyday finish', 'A complete grooming visit', 'A personal-care reset'],
    image: manicureImage,
  },
  {
    name: 'Massage Services',
    description: 'Relax and unwind with professional massage services.',
    longDescription:
      'Grooming should feel good as well as look good. Targeted massage options help you slow down, release tension, and leave the chair feeling refreshed.',
    details: ['Full Body', 'Back & Shoulder', 'Head & Scalp'],
    idealFor: ['A slower reset', 'A post-work break', 'A moment of relaxation'],
    image: massageImage,
  },
]

export const features: Feature[] = [
  {
    title: 'Precision',
    description: 'Every cut and line-up is finished with attention to detail.',
  },
  {
    title: 'Style',
    description: 'Choose a classic look or something designed specifically for you.',
  },
  {
    title: 'Grooming',
    description: 'Go beyond the haircut with beard care, facials, nails, and massage.',
  },
  {
    title: 'Convenience',
    description: 'One location for multiple personal grooming services.',
  },
  {
    title: 'Professional Experience',
    description: 'A dedicated space for customers who want to look sharp and feel refreshed.',
  },
  {
    title: 'Six-Day Service',
    description: 'Open Monday to Saturday, with Sunday reserved for a slower day.',
  },
]

export const extraServices: Service[] = [
  {
    name: 'Signature Cut',
    description: 'Haircut + Line Up. A fresh cut finished with precise edge detailing.',
    longDescription: 'The essential reset for a sharper silhouette and a cleaner finish.',
    idealFor: ['A quick style refresh'],
    image: styleImage,
  },
  {
    name: 'Complete Grooming',
    description: 'Haircut + Beard Trim + Line Up. A complete look from hair to beard.',
    longDescription: 'A fuller grooming visit that brings your hair and beard together.',
    idealFor: ['A head-to-toe refresh'],
    image: completeGroomingImage,
  },
  {
    name: 'Fresh & Clean',
    description: 'Haircut + Facial. A fresh cut combined with a refreshing facial treatment.',
    longDescription: 'A clean cut paired with a refreshing facial for a complete reset.',
    idealFor: ['A fresh, polished finish'],
    image: facialTreatmentImage,
  },
]

export const openingHours: OpeningHours[] = [
  { day: 'Monday', hours: '9:00 AM – 8:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM – 8:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM – 8:00 PM' },
  { day: 'Thursday', hours: '9:00 AM – 8:00 PM' },
  { day: 'Friday', hours: '9:00 AM – 8:00 PM' },
  { day: 'Saturday', hours: '9:00 AM – 8:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
]

export const faqs: Faq[] = [
  {
    question: 'What services are available at Signature Fadez?',
    answer:
      'Signature Fadez offers haircuts and fades, beard grooming, line-ups, facials and skin care, manicure and pedicure, and massage services. You can describe the look or refresh you need when you call.',
  },
  {
    question: 'How do I get in touch about a visit?',
    answer:
      `Call ${business.phone} to check availability or ask about a service. The shop is open Monday to Saturday from 9:00 AM to 8:00 PM.`,
  },
  {
    question: 'Where can I find the shop?',
    answer: `${business.address}. Use the directions link on the Contact page to open the location in Google Maps.`,
  },
  {
    question: 'Is Signature Fadez open on Sunday?',
    answer: `${business.closedDay}. Plan your visit for Monday through Saturday, or call ahead if you need to confirm availability.`,
  },
]

export const gallery: GalleryImage[] = [
  {
    image: heroImage,
    alt: 'Signature Fadez barber shop interior with a clean, modern grooming space',
    className: 'gallery-featured',
  },
  {
    image: signatureStyleImage,
    alt: 'Close view of a signature haircut and styling detail',
    className: 'gallery-large',
  },
  {
    image: lineUpsImage,
    alt: 'Precise line-up and edge detailing',
    className: 'gallery-small',
  },
  {
    image: kidsHairImage,
    alt: 'Freshly finished kids haircut',
    className: 'gallery-medium',
  },
  {
    image: pedicureImage,
    alt: 'Detailed foot and nail grooming treatment',
    className: 'gallery-small',
  },
  {
    image: completeGroomingImage,
    alt: 'Barber and client during a complete grooming service',
    className: 'gallery-medium',
  },
  {
    image: secondaryMassageImage,
    alt: 'Relaxing massage treatment in a calm setting',
    className: 'gallery-small',
  },
  {
    image: facialTreatmentImage,
    alt: 'Fresh facial treatment and skin care detail',
    className: 'gallery-large',
  },
  {
    image: beardGroomingImage,
    alt: 'Sharp beard grooming and finishing detail',
    className: 'gallery-medium',
  },
  {
    image: manicureImage,
    alt: 'Well-finished manicure and grooming detail',
    className: 'gallery-small',
  },
  {
    image: footSoakImage,
    alt: 'Relaxing foot soak and self-care service',
    className: 'gallery-medium',
  },
  {
    image: nailCleaningImage,
    alt: 'Professional nail cleaning and finishing service',
    className: 'gallery-small',
  },
  {
    image: massageImage,
    alt: 'Massage therapy session in a calm grooming space',
    className: 'gallery-large',
  },
  {
    image: styleImage,
    alt: 'Fresh haircut set with a modern barbershop finish',
    className: 'gallery-small',
  },
  {
    image: vImage,
    alt: 'Detail shot of grooming styling and finishing touch',
    className: 'gallery-medium',
  },
]
