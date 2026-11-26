import React from 'react';

interface BCellLogoProps {
  className?: string;
  variant?: 'white' | 'blue' | 'gradient' | 'current';
  showBackground?: boolean;
}

export const BCellLogo: React.FC<BCellLogoProps> = ({
  className = 'w-7 h-7',
  variant = 'current',
  showBackground = false,
}) => {
  const getFill = () => {
    switch (variant) {
      case 'white':
        return '#ffffff';
      case 'blue':
        return '#3b82f6';
      case 'gradient':
        return 'url(#bcell-blue-gradient)';
      default:
        return 'currentColor';
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      className={`shrink-0 ${className}`}
      fill="none"
      role="img"
      aria-label="Logo Resmi Konter B-Cell"
    >
      <defs>
        <linearGradient id="bcell-blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      {showBackground && (
        <rect width="1000" height="1000" rx="220" fill="#000000" />
      )}

      {/* Official B-Cell Monogram Path (B & C Harmony) */}
      <path
        fill={getFill()}
        fillRule="evenodd"
        d="
          M 195 90
          C 195 62 218 40 246 40
          C 274 40 297 62 297 90
          L 297 545
          C 297 685 410 798 550 798
          C 648 798 733 742 774 660
          C 755 640 735 605 705 600
          C 665 595 645 565 645 545
          C 645 525 665 495 705 490
          C 735 485 755 450 774 430
          C 733 348 648 292 550 292
          C 506 292 465 303 429 323
          C 405 298 368 312 382 258
          C 432 216 490 190 550 190
          C 746 190 905 349 905 545
          C 905 741 746 900 550 900
          C 354 900 195 741 195 545
          Z
          M 535 425
          C 601 425 655 479 655 545
          C 655 611 601 665 535 665
          C 469 665 415 611 415 545
          C 415 479 469 425 535 425
          Z
        "
      />
    </svg>
  );
};
