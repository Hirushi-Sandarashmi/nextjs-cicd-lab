export default function Home() {
  const steps = [
    "Push code to GitHub",
    "Run lint and build checks",
    "Build a Docker image",
    "Push the image to Docker Hub",
  ];

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#202123]">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center gap-10 px-6 py-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f766e]">
            Next.js CI/CD Lab
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
            Learn GitHub Actions by shipping a Docker image.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#55524a]">
            This project is intentionally small: every code change can be
            checked by GitHub Actions, packaged as a Docker image, and pushed
            to Docker Hub.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-lg border border-[#ded8c8] bg-white p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0f766e] text-sm font-bold text-white">
                {index + 1}
              </div>
              <p className="mt-4 text-base font-semibold">{step}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-[#d3cabc] bg-[#202123] p-6 font-mono text-sm text-[#f7f5ef]">
          <p>$ npm run lint</p>
          <p>$ npm run build</p>
          <p>$ docker build -t your-dockerhub-name/nextjs-cicd-lab .</p>
        </div>
      </section>
    </main>
  );
}
