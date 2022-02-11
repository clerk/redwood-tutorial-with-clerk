import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { SignInButton, UserButton } from '@clerk/clerk-react'

const BlogLayout = ({ children }) => {
  const { logIn, logOut, isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <header className="relative flex justify-between items-center py-4 px-8 bg-blue-700 text-white">
        <h1 className="text-5xl font-semibold tracking-tight">
          <Link
            className="text-blue-400 hover:text-blue-100 transition duration-100"
            to={routes.home()}
          >
            Redwood Blog
          </Link>
        </h1>
        <nav>
          <ul className="relative flex items-center font-light">
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.about()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded"
                to={routes.contact()}
              >
                Contact
              </Link>
            </li>
            <li className={isAuthenticated ? 'ml-2' : null}>
              {isAuthenticated ? (
                <UserButton afterSignOutAll={window.location.href} />
              ) : (
                <SignInButton mode="modal">
                  <button className="py-2 px-4 hover:bg-blue-600 transition duration-100 rounded">
                    Log in
                  </button>
                </SignInButton>
              )}
            </li>
          </ul>
          {isAuthenticated && (
            <div className="text-right text-xs text-blue-300">
              {currentUser?.emailAddresses[0]?.emailAddress}
            </div>
          )}
        </nav>
      </header>
      <main className="max-w-4xl mx-auto p-12 bg-white shadow rounded-b">
        {children}
      </main>
    </>
  )
}

export default BlogLayout
