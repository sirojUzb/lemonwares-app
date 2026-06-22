const loremText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem'

function QuoteMark() {
  return (
    <span className="mr-2 align-top text-2xl font-bold leading-none text-[#9bb4d4]">
      &ldquo;
    </span>
  )
}

function Card({ logo, text, name, role }) {
  return (
    <div className="rounded-2xl bg-white p-7 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)]">
      {/* Logo (text placeholder — swap for SVG later) */}
      <div className="mb-5 font-extrabold tracking-tight text-[#1f2227]">
        {logo}
      </div>

      <p className="text-[15px] leading-relaxed text-gray-600">
        <QuoteMark />
        {text}
      </p>

      <p className="mt-6 font-bold text-[#1f2227]">{name}</p>
      <p className="mt-1 text-sm text-gray-400">{role}</p>
    </div>
  )
}

function Testimonials() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left column */}
          <div>
            {/* Heading with big pink quote behind it */}
            <div className="relative mb-4 inline-block">
              <span className="pointer-events-none absolute -left-2 -top-10 select-none font-serif text-[160px] leading-none text-[#f0b6bb]">
                &ldquo;
              </span>
              <h2 className="relative text-4xl font-extrabold leading-tight tracking-tight text-[#1f2227] sm:text-5xl">
                Real Stories from
                <br />
                Real Customers
              </h2>
            </div>
            <p className="text-[15px] text-gray-500">
              Get inspired by these stories.
            </p>

            {/* CLI card */}
            <div className="mt-10">
              <Card
                logo="CLI"
                text={loremText}
                name="Floyd Miles"
                role="Vice President, CLI"
              />
            </div>
          </div>

          {/* Right column (offset down) */}
          <div className="md:pt-20">
            <Card
              logo="JPNL"
              text={loremText}
              name="Jane Cooper"
              role="CEO, JPNL"
            />
            <div className="mt-8">
              <Card
                logo="LeeveOn Branding"
                text="LemonWares saved our time in Hosting my company page."
                name="Kristin Watson"
                role="Co-Founder, LeeveOn Branding"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
