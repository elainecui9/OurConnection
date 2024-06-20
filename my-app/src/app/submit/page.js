import Header from "../header"
import Footer from "../footer"
import Link from "next/link"

export default function Submit() {
  return (
    <form className='bg-beige'>
        <Header></Header>
      <div className="space-y-12 m-24 text-brown">
        <div className="border-b border-brown pb-12">
          <h2 className="text-base font-semibold leading-7 text-brown text-4xl pb-4">Submit a Story</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            First let us get to know you.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-brown">
                Please Enter Your Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-brown placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex mt-4 rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-brown placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-brown">
                Input Story
              </label>
              <p className="mt-3 text-sm leading-6 text-gray-600">Type what you would like to share here...</p>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-brown shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-brown">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-brown shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-brown">Visibility</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Your privacy and comfortability is our utmost importance, so please choose whether you want to stay anonymous with your story post.
          </p>

          <div className="mt-10 space-y-10">
            <fieldset>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="comments" className="font-medium text-brown">
                      Stay Anonymous
                    </label>
                    <p className="text-gray-500">Do not have your name shown.</p>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="mt-6 flex mr-32 mb-32 items-center justify-end gap-x-6">
        <Link
          type="submit"
          href ="./thanks"
          className="rounded-md bg-brown px-16 py-2 text-sm font-semibold text-white shadow-sm "
        >
          Submit
        </Link>
      </div>
      <Footer></Footer>
    </form>
  )
}
