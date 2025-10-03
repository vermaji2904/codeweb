export default function StatisticsSection() {
  return (
    <section className="py-20 px-6 text-center" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-sans font-normal text-white mb-6 tracking-wide">
            Accelerated Search at<br/> 
            <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
              Your Fingertips
            </span>
          </h2>
          <p className="text-lg font-sans font-light" style={{ color: '#BBBBBB' }}>
            Say goodbye to delays, hello to instant answer
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 place-items-center">
          {/* Uptime Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2" style={{ color: '#BBBBBB' }}>
              Uptime
            </p>
            <div className="text-6xl font-sans font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <p className="text-sm font-sans font-light" style={{ color: '#BBBBBB' }}>
              Ensuring reliability.
            </p>
          </div>

          {/* Searches Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2" style={{ color: '#BBBBBB' }}>
              Searches
            </p>
            <div className="text-6xl font-sans font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent mb-2">
              5M+
            </div>
            <p className="text-sm font-sans font-light" style={{ color: '#BBBBBB' }}>
              Trusted by millions.
            </p>
          </div>

          {/* Response Time Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2" style={{ color: '#BBBBBB' }}>
              Response Time
            </p>
            <div className="text-6xl font-sans font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent mb-2">
              0.5s
            </div>
            <p className="text-sm font-sans font-light" style={{ color: '#BBBBBB' }}>
              Lightning-fast results.
            </p>
          </div>

          {/* Faster Column */}
          <div className="text-center md:text-left">
            <p className="text-sm font-sans font-normal mb-2" style={{ color: '#BBBBBB' }}>
              Faster
            </p>
            <div className="text-6xl font-sans font-bold bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent mb-2">
              10x
            </div>
            <p className="text-sm font-sans font-light" style={{ color: '#BBBBBB' }}>
              Redefining speed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}