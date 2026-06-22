import below1 from '../images/below1.svg'
import below2 from '../images/below2.svg'
import below3 from '../images/below3.svg'
import below4 from '../images/below4.svg'
import below5 from '../images/below5.svg'
import below6 from '../images/below6.svg'

const logos = [
  { src: below1, alt: 'JPNL' },
  { src: below2, alt: 'Koranﾃｩ Scents' },
  { src: below3, alt: 'Nadine Ghaida' },
  { src: below4, alt: 'LeeveOn Branding' },
  { src: below5, alt: 'Jrang Glasses' },
  { src: below6, alt: 'Crypto Learn Invest' },
]

function Brands() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-16 md:grid-cols-2">
        {/* Left: copy */}
        <div className="max-w-md">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#1f2227] sm:text-5xl">
            We serve over 100 Nigerian Websites
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-gray-500">
            Connect LemonWares with your favourite tools that you use daily and
            keep things on track.
          </p>
        </div>

        {/* Right: logos */}
        <div className="grid grid-cols-3 items-center justify-items-center gap-x-10 gap-y-12">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto max-w-[150px] object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
