
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="glass p-12 rounded-3xl max-w-md text-center space-y-6 animate-scale">
        <h1 className="text-6xl font-bold text-gradient">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background hover:opacity-90 transition-all duration-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> 
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
