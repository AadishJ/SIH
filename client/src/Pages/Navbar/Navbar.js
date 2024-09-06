import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center gap-4">
        <div>
          <Link to="/" className="text-white hover:underline">Ayush</Link>
        </div>
        <div className='flex gap-4'>
          <Link to="/about" className="text-white hover:underline">About Us</Link>
          <Link to="/startup" className="text-white hover:underline">StartUp</Link>
          <Link to="/startup" className="text-white hover:underline">Investors</Link>
          <Link to="/startup" className="text-white hover:underline">Mentorship</Link>
          <Link to="/startup" className="text-white hover:underline">Policies</Link>
          <Link to="/startup" className="text-white hover:underline">Events</Link>
          <Link to="/signup" className="text-white hover:underline">Signup</Link>
          <Link to="/login" className="text-white hover:underline">Login</Link>    
        </div>
        </div>
    </nav>
  );
}

export default NavBar;
