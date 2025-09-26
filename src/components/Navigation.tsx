import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{
    name: "Home",
    path: "/"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Projects",
    path: "/projects"
  }, {
    name: "Skills",
    path: "/skills"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  const navLinkClass = ({
    isActive
  }: {
    isActive: boolean;
  }) => `relative px-4 py-2 transition-all duration-300 ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`;
  return <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b nav-slide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold text-gradient hover:scale-105 transition-transform">Get to know Hena</NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => <NavLink key={item.name} to={item.path} className={`${navLinkClass} hover:scale-105 transition-all duration-300`} style={{animationDelay: `${index * 0.1}s`}} end>
                {item.name}
              </NavLink>)}
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => <NavLink key={item.name} to={item.path} className={`block px-3 py-2 text-base font-medium transition-colors ${location.pathname === item.path ? "text-primary" : "text-muted-foreground hover:text-foreground"}`} onClick={() => setIsOpen(false)} end>
                  {item.name}
                </NavLink>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;