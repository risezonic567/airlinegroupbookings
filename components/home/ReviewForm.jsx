'use client'

import { useState } from 'react'

export default function ReviewForm() {
    const [sent, setSent] = useState(false)
    return <form onSubmit={(event) => { event.preventDefault(); setSent(true) }} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"><h3 className="text-lg font-bold text-slate-900">Leave a comment</h3><p className="mt-1 text-md text-slate-500">Share a note about your group travel experience.</p><div className="mt-5 grid gap-4 sm:grid-cols-2"><label className="text-md font-medium text-slate-700">Name<input required name="name" className="mt-2 h-11 w-full rounded-lg border border-slate-200 px-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" /></label><label className="text-md font-medium text-slate-700">Email<input required type="email" name="email" className="mt-2 h-11 w-full rounded-lg border border-slate-200 px-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" /></label></div><label className="mt-4 block text-md font-medium text-slate-700">Comment<textarea required name="comment" rows="4" className="mt-2 w-full rounded-lg border border-slate-200 p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" /></label><button className="mt-4 rounded-xl bg-blue-700 px-5 py-3 text-md font-bold text-white hover:bg-blue-800" type="submit">Post comment</button>{sent && <p role="status" className="mt-3 text-md font-medium text-green-700">Thanks for sharing your comment.</p>}</form>
}
