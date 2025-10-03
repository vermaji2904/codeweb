export default function CTABanner() {
  return (
    <section className="py-20 px-6 text-center" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-6xl mx-auto">
        {/* Banner Container */}
        <div 
          className="rounded-3xl py-16 px-8 text-center relative overflow-hidden"
          style={{ backgroundColor: '#1A1A1A' }}
        >
          {/* Subtle texture overlay */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
                linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
              `,
              backgroundSize: '20px 20px'
            }}
          ></div>
          
          {/* Grey fade on bottom right */}
          <div 
            className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at bottom right, rgba(128,128,128,0.3) 0%, transparent 70%)'
            }}
          ></div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6 leading-tight">
              Sell Smarter with the<br/>
              <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                CRM Built for Growth
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl font-sans font-normal mb-10 leading-relaxed max-w-2xl mx-auto" style={{ color: '#BBBBBB' }}>
              Manage leads, automate tasks, and close deals faster with ease
            </p>

            {/* CTA Button */}
            <a 
              href="https://www.instagram.com/anubhav_160?igsh=a3BvMXU2MGZpYTJv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-black font-sans font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              style={{ fontSize: '16px' }}
            >
              Get Care Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}