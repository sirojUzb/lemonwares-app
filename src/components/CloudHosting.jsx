import web1 from '../images/web1.svg'
import web2 from '../images/web2.svg'
import web3 from '../images/web3.svg'
import web4 from '../images/web4.svg'
import web5 from '../images/web5.svg'
import web6 from '../images/web6.svg'

const logos = [
  { src: web1, alt: 'cPanel' },
  { src: web2, alt: 'Imunify360' },
  { src: web3, alt: 'LiteSpeed' },
  { src: web4, alt: 'Softaculous' },
  { src: web5, alt: 'WordPress' },
  { src: web6, alt: 'Cloudflare' },
]

function CloudHosting() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid max-w-[1456px] items-center gap-12 px-10 py-16 md:grid-cols-2 md:py-20">
        {/* Left: copy */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-[#1f2227] sm:text-5xl">
            True Cloud Web&nbsp; Hosting
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-gray-500">
            True Cloud Web Hosting All of the hosting packages we offer are
            deployed instantly on our SSD powered cloud. We don&apos;t use
            dedicated servers that operate on single pieces of hardware. Our
            entire infrastructure is built to be reliable, secure, and scalable.
          </p>
        </div>

        {/* Right: brand logos */}
        <div className="grid grid-cols-3 items-center gap-x-12 gap-y-12 justify-items-center">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto max-w-[170px] object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CloudHosting
