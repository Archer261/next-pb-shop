import Link from "next/link";

const Hero = () => {
    return (
        <div className="relative h-[600px] w-full overflow-hidden">
            {/* Background Image Container */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("/hero-background.jpg")',  // Note the leading slash
                    filter: 'brightness(0.85)'
                }}
            />

            {/* Content Container */}
            <div className="relative h-full w-full">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-full flex-col items-center justify-center text-center">
                        {/* Welcome Message */}
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
                                Welcome to Our Pickleball Store
                            </h1>
                            <p className="mx-auto max-w-2xl text-xl text-black/90">
                                Find the perfect gear for your game. Premium paddles, balls, and accessories for players of all levels.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8">
                            <Link href="/products">
                                <button
                                    className="rounded-md bg-white px-8 py-3 text-lg font-semibold text-black transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2"
                                >
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;