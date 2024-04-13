import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState("coffee");
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <div>
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          onChange={(e) =>
            setCurrentTheme(e.target.checked ? themes[1] : themes[0])
          }
        />
        <svg
          className="swap-on fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19Z" />
        </svg>
        <svg
          className="swap-off fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
      <select
        value={currentTheme}
        onChange={(e) => setCurrentTheme(e.target.value)}
        className="select select-bordered"
      >
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
};
export default ThemeSwitcher;

//   const toggleTheme = () => {
//     const newTheme = currentTheme === "light" ? "dark" : "light";
//     setCurrentTheme(newTheme);
//   };

//   return (
//     <div>
//       <label className="swap swap-rotate">
//         <input
//           type="checkbox"
//           onChange={toggleTheme}
//           checked={currentTheme === "dark"}
//           aria-label="Toggle between light and dark theme"
//         />
//         {/* SVG icons remain the same */}
//       </label>
//       <select
//         value={currentTheme}
//         onChange={(e) => setCurrentTheme(e.target.value)}
//         className="select select-bordered"
//         aria-label="Select a theme"
//       >
//         {themes.map((theme) => (
//           <option key={theme} value={theme}>
//             {theme}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default ThemeSwitcher;
