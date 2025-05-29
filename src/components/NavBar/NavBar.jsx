import { Link } from 'react-router-dom';

function Navbar({ navLinks }) {
  return (
    <nav className="px-4 py-8">
      <ul>
        {navLinks.map(link => (
          <li key={link.path} className='' >
            <button className='py-2 px-4'><Link to={link.path}>{link.label}</Link></button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;