import { logo } from ".";

export default function Footer() {
  return (
    <footer className="w-full py-5 flex flex-col sm:flex-row justify-between items-center text-white px-3">
      {/* Footer text: Center-aligned on small screens, left-aligned on larger screens */}
      <p className="text-center sm:text-left mb-4 sm:mb-0">Dropcream.com© all rights reserved</p>
      
      {/* Container for logos: Wrapping to the next line on small screens */}
      <div className="flex flex-wrap justify-center sm:justify-start items-center gap-5">
        {logo.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {/* Logo image with responsive height and auto width for aspect ratio */}
            <img src={item.logo} alt={`Logo ${index}`} className="h-8 w-auto" />
          </div>
        ))}
      </div>
    </footer>
  );
}
