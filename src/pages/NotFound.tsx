
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
        <div className="text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-primary">404</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Oops! We couldn't find the page you're looking for.
          </p>
          <p className="text-gray-600 mb-8">
            The page might have been moved, deleted, or perhaps you entered an incorrect URL.
          </p>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
