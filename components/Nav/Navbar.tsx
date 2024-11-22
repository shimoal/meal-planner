import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import NavLink from './NavLink'

const Navbar = () => {
  return (
    <nav className="bg-indigo-800 flex justify-between items-center font-bold text-white px-8">
      <div className="flex gap-8 p-4 justify-center">
        <NavLink href="/">Meal Plan</NavLink>
        <NavLink href="/add-food">Add Food</NavLink>
        <NavLink href="/view-foods">View Foods</NavLink>
        <NavLink href="/add-meal">Add Meal</NavLink>
        <NavLink href="/view-meals">View Meals</NavLink>
      </div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar
