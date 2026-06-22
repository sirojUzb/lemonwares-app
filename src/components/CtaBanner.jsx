import whatsapp from '../images/whatsapp.svg'

function CtaBanner() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-6 pb-20">
        <div className="relative overflow-hidden rounded-2xl bg-[#F3F6FB] px-6 py-24 text-center">
          {/* Decorative triangles */}
          <span
            className="absolute left-1/2 top-0 h-8 w-8 -translate-x-24 bg-[#C8102E]"
            style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
          />
          <span
            className="absolute bottom-12 left-0 h-9 w-9 bg-[#C8102E]"
            style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
          />
          <span
            className="absolute bottom-0 right-0 h-16 w-16 bg-[#C8102E]"
            style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
          />

          <h2 className="mx-auto max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-[#1f2227] sm:text-6xl">
            We&apos;re here to make your website awesome.
          </h2>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-md bg-[#C8102E] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_40px_-12px_rgba(200,16,46,0.6)] transition-colors hover:bg-[#a50d26]"
          >
            <img src={whatsapp} alt="" className="h-5 w-5" />
            Get in touch with us
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
