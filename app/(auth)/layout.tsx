import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col md:flex-row h-screen">
      <section className="flex-1 flex items-center justify-center p-6 relative bg-[url('/images/background.webp')] bg-cover bg-center bg-no-repeat">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-4 transition-transform duration-300 transform hover:scale-105">
            Welcome Back to Finance Pro!
          </h1>
          <p className="text-lg text-white drop-shadow-md transition-transform duration-300 transform hover:scale-105">
            Transforming Financial Dreams into Reality
          </p>
        </div>
      </section>

      <section className="flex-1 p-6 flex items-center justify-center">
        <div className="relative isolate">
          <div
            className="absolute inset-x-0 top-1/4 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
            aria-hidden="true"
          >
            <div
              className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25"
              style={{
                clipPath:
                  'polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)',
              }}
            ></div>
          </div>
          {children}
        </div>
      </section>
    </main>
  );
}
