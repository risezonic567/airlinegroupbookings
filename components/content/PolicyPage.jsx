export default function PolicyPage({ title, introduction, sections }) {
    return (
        <main className="bg-slate-50 px-5 py-12 sm:px-8 sm:py-16">
            <article className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
                <p className="mt-5 text-base leading-7 text-slate-600">{introduction}</p>
                <div className="mt-8 space-y-7">
                    {sections.map((section) => (
                        <section key={section.title}>
                            <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
                            <p className="mt-2 text-base leading-7 text-slate-600">{section.text}</p>
                        </section>
                    ))}
                </div>
            </article>
        </main>
    )
}
