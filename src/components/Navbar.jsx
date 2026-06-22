import lemonLogo from '../images/lemonLogo.svg'
import phoneIcon from '../images/phoneIcon.svg'

// "Our Services" is the active link and sits apart from the rest;
// About / Blog&News / Contact form a tight group.
const groupLinks = [
  { label: 'About', href: '#about' },
  { label: 'Blog&News', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex h-20 max-w-[1456px] items-center px-10">
        {/* Logo */}
        <a href="#" className="flex shrink-0 items-center">
          <img src={lemonLogo} alt="Lemonwares" className="h-12 w-auto" />
        </a>

        {/* Nav links */}
        <nav className="ml-16 hidden items-center lg:flex">
          {/* Active link, separated from the group */}
          <a
            href="#services"
            className="relative whitespace-nowrap text-[15px] font-semibold text-[#1a1a1a]"
          >
            Our Services
            <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-[#C8102E]" />
          </a>

          {/* Tight group */}
          <div className="ml-28 flex items-center gap-9">
            {groupLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-[15px] font-medium text-[#1a1a1a] transition-colors hover:text-[#C8102E]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Right: account + phone, pushed to the far right */}
        <div className="ml-auto flex items-center gap-6">
          <a
            href="#account"
            className="hidden text-[15px] font-semibold text-[#1a1a1a] transition-colors hover:text-[#C8102E] md:inline"
          >
            Account
          </a>

          <span className="hidden h-7 w-px bg-gray-200 md:inline-block" />

          <a
            href="tel:+2349067322844"
            className="flex items-center gap-2 whitespace-nowrap text-[15px] font-semibold text-[#1a1a1a]"
          >
            <img src={phoneIcon} alt="" className="h-5 w-5" />
            +2349067322844
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
