import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { PiSunDimFill } from "react-icons/pi";
import { FaMoon } from "react-icons/fa";

export function ColorModeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

 

  if (!mounted) return null;

  return (
    <div>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <PiSunDimFill className="text-gray-400 text-3xl"/>
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <FaMoon className="text-slate-700 text-2xl"/>
        </button>
      )}
    </div>
  );
}
