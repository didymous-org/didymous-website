import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section
        className="relative min-h-screen bg-cover bg-center pb-24"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/70 to-transparent"></div>

        {/* Navbar */}
        {/* Navbar */}
<nav className="relative z-20 px-6 md:px-16 py-5 bg-transparent">

  <div className="flex flex-col md:flex-row items-center justify-between gap-6">

    {/* LOGO */}
    <Image
      src="/tirumala-logo.png"
      alt="Logo"
      width={180}
      height={180}
      className="object-contain w-28 md:w-44"
      priority
    />

    {/* NAV LINKS */}
    <div className="flex flex-wrap justify-center gap-4 md:gap-10 text-white text-sm md:text-lg font-medium">

      <a
        href="#"
        className="hover:text-yellow-300 transition duration-300"
      >
        Home
      </a>

      <a
        href="#"
        className="hover:text-yellow-300 transition duration-300"
      >
        About
      </a>

      <a
        href="#"
        className="hover:text-yellow-300 transition duration-300"
      >
        Products
      </a>

      <a
        href="/careers"
        className="hover:text-yellow-400 transition duration-300"
      >
        Careers
      </a>

      <a
        href="#"
        className="hover:text-yellow-300 transition duration-300"
      >
        Contact
      </a>

    </div>

    {/* BUTTON */}
    <button className="bg-yellow-400 hover:bg-yellow-300 transition px-6 md:px-7 py-3 rounded-full font-semibold text-black shadow-xl text-sm md:text-base">
      Enquire Now
    </button>

  </div>

</nav>

        {/* Hero Content */}
        <div className="relative z-10 grid lg:grid-cols-2 items-center px-6 md:px-16 pt-10 md:pt-20">
          {/* Left Side */}
          <div>
            <p className="text-yellow-400 uppercase tracking-[4px] font-bold mb-5">
              Premium Quality Wheat Flour
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
              Pure Nutrition.
              <br />
              <span className="text-yellow-400">Perfectly Crafted.</span>
            </h1>

            <p className="mt-8 text-gray-200 text-lg leading-9 max-w-xl">
              Tirumala brings premium quality whole wheat flour made with
              purity, nutrition, and tradition for healthy and delicious rotis
              every day.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="bg-green-900 hover:bg-green-800 transition text-white px-8 py-4 rounded-full text-lg shadow-xl">
                Explore Products
              </button>

              <button className="border-2 border-white hover:bg-white hover:text-black transition text-white px-8 py-4 rounded-full text-lg">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center mt-10 lg:mt-10">
            <div className="absolute w-[500px] h-[500px] bg-yellow-300/15 blur-3xl rounded-full"></div>

            <Image
              src="/premium-bag.png"
              alt="Tirumala Bag"
              width={600}
              height={520}
              className="relative z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>
      {/* TRUST BADGES */}
      <div className="relative z-20 px-6 md:px-16 mt-10 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 bg-[#0b3b1d]/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)] border border-white/10">
          {/* Badge 1 */}
          <div className="text-center text-white">
            <div className="text-5xl mb-4">🌾</div>
            <h3 className="font-bold text-lg">100% Natural</h3>
            <p className="text-sm text-gray-300 mt-2">
              No additives or chemicals
            </p>
          </div>

          {/* Badge 2 */}
          <div className="text-center text-white">
            <div className="text-5xl mb-4">🚜</div>
            <h3 className="font-bold text-lg">Farm Fresh</h3>
            <p className="text-sm text-gray-300 mt-2">Directly sourced wheat</p>
          </div>

          {/* Badge 3 */}
          <div className="text-center text-white">
            <div className="text-5xl mb-4">🏭</div>
            <h3 className="font-bold text-lg">Hygienic</h3>
            <p className="text-sm text-gray-300 mt-2">
              Advanced processing methods
            </p>
          </div>

          {/* Badge 4 */}
          <div className="text-center text-white">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="font-bold text-lg">No Preservatives</h3>
            <p className="text-sm text-gray-300 mt-2">Pure and healthy flour</p>
          </div>

          {/* Badge 5 */}
          <div className="text-center text-white">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="font-bold text-lg">Premium Quality</h3>
            <p className="text-sm text-gray-300 mt-2">
              Carefully selected grains
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
