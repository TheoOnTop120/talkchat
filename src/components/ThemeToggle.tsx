import type { Theme } from "../types/theme";

type ThemeToggleProps = {
  theme: Theme;
  label: string;
  onToggle: () => void;
};

function ThemeToggle({ theme, label, onToggle }: ThemeToggleProps) {
  return (
    <button
      aria-label={label}
      className="icon-button theme-toggle"
      onClick={onToggle}
      type="button"
    >
      {theme === "light" ? (
        <svg
          aria-hidden="true"
          fill="none"
          height="20"
          viewBox="0 0 20 20"
          width="20"
        >
          <path
            d="M16.2 12.5A6.7 6.7 0 0 1 7.5 3.8a6.7 6.7 0 1 0 8.7 8.7Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          fill="none"
          height="20"
          viewBox="0 0 20 20"
          width="20"
        >
          <circle
            cx="10"
            cy="10"
            r="3.2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M10 1.8v1.5m0 13.4v1.5M18.2 10h-1.5M3.3 10H1.8m14-5.8-1.1 1.1M5.3 14.7l-1.1 1.1m11.6 0-1.1-1.1M5.3 5.3 4.2 4.2"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.6"
          />
        </svg>
      )}
    </button>
  );
}

export default ThemeToggle;
