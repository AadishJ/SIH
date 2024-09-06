import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-end items-center">
              <div className="space-x-4">
          <Link to="/about" className="text-white hover:underline">About Us</Link>
          <Link to="/signup" className="text-white hover:underline">Signup</Link>
          <Link to="/login" className="text-white hover:underline">Login</Link>    
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
