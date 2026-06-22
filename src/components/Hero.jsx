import heroPic from "../images/header-pic.jpg";

const tabs = [
  { label: "Hosting", active: true },
  { label: "Domain" },
  { label: "SEO" },
  { label: "Email" },
];

function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid max-w-[1456px] items-center gap-12 px-10 py-16 md:grid-cols-2 md:py-24">
        {/* Left: copy */}
        <div className="max-w-xl">
          {/* Tabs */}
          <div className="flex items-center gap-8 border-b border-gray-100 pb-3">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                type="button"
                className={`relative pb-3 text-[15px] transition-colors ${
                  tab.active
                    ? "font-semibold text-[#C8102E]"
                    : "font-medium text-gray-400 hover:text-[#C8102E]"
                }`}
              >
                {tab.label}
                {tab.active && (
                  <span className="absolute -bottom-[1px] left-0 h-[3px] w-full rounded-full bg-[#C8102E]" />
                )}
              </button>
            ))}
          </div>

          {/* Heading */}
          <h1 className="mt-10 text-5xl font-extrabold leading-[1.1] tracking-tight text-[#1f2227] sm:text-6xl">
            Premium Web Hosting for Your Website
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-gray-400">
            Blazing fast web hosting for individuals and businesses of all sizes
            backed by 24ﾃ・ﾃ・65 Support.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#signup"
              className="rounded-md bg-[#C8102E] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_40px_-12px_rgba(200,16,46,0.6)] transition-colors hover:bg-[#a50d26]"
            >
              Create an Account
            </a>
            <a
              href="#plans"
              className="rounded-md border border-gray-300 bg-white px-7 py-3.5 text-[15px] font-semibold text-[#1f2227] transition-colors hover:border-gray-400"
            >
              Choose your plan
            </a>
          </div>
        </div>

        {/* Right: image with decorative triangles */}
        <div className="relative">
          <img
            src={heroPic}
            alt="Person working on a laptop"
            className="aspect-[4/3] w-full max-h-[520px] object-cover"
          />

          {/* Top-right triangle */}
          <span
            className="absolute -right-3 top-8 h-16 w-16 bg-[#C8102E]"
            style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
          />
          {/* Left-middle triangle (points right) */}
          <span
            className="absolute -left-5 top-[58%] h-14 w-14 bg-[#C8102E]"
            style={{ clipPath: "polygon(0 0, 0 100%, 100% 50%)" }}
          />
          {/* Bottom-right triangle */}
          <span
            className="absolute -right-3 bottom-6 h-20 w-20 bg-[#C8102E]"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;