import{ useRef, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const TestimonialsCarousel = ({ children }) => {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: 'start', dragFree: true },
    [autoplay.current]
  )

  const resetAutoplay = useCallback(() => {
    if (autoplay.current && emblaApi) {
      autoplay.current.reset()
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('pointerDown', resetAutoplay)

    return () => {
      emblaApi.off('pointerDown', resetAutoplay)
    }
  }, [emblaApi, resetAutoplay])

  return (
    <div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex gap-4">
            {children}
      </div>
    </div>
  )
}

export default TestimonialsCarousel
