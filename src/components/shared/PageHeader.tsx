
import React from "react";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  backgroundImage: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  return (
    <div
      className="relative h-[40vh] md:h-[50vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
