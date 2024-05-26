import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center h-16 bg-neutral-800 text-neutral-400 z-50 mt-10"> 
      <div className="flex space-x-2">
        <Link to="/">  About</Link>
        <Link to="/"> Contact </Link>
      </div> 
      <p className="text-sm">Developed by Nathan Turkson </p> 
    </footer>
  )
}

export default Footer
