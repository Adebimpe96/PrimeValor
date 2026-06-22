import React from 'react'

// Signature element: a constellation of nodes connected by lines, evoking
// the network of people, employers, and opportunity that an HR consultancy
// sits at the center of. Lines draw themselves in on load; nodes pulse softly.
export default function NetworkMotif({ className = '' }) {
  const nodes = [
    { id: 'core', x: 300, y: 230, r: 7 },
    { id: 'a', x: 110, y: 90, r: 4 },
    { id: 'b', x: 470, y: 70, r: 4 },
    { id: 'c', x: 540, y: 220, r: 4 },
    { id: 'd', x: 420, y: 380, r: 4 },
    { id: 'e', x: 160, y: 400, r: 4 },
    { id: 'f', x: 60, y: 260, r: 4 },
    { id: 'g', x: 270, y: 60, r: 3 },
    { id: 'h', x: 360, y: 150, r: 3 },
  ]

  const edges = [
    ['core', 'a'], ['core', 'b'], ['core', 'c'], ['core', 'd'],
    ['core', 'e'], ['core', 'f'], ['a', 'g'], ['b', 'g'],
    ['b', 'h'], ['core', 'h'], ['e', 'f'],
  ]

  const find = (id) => nodes.find((n) => n.id === id)

  return (
    <svg
      viewBox="0 0 600 460"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a connected network representing people and opportunity"
    >
      {edges.map(([a, b], i) => {
        const n1 = find(a)
        const n2 = find(b)
        const len = Math.hypot(n2.x - n1.x, n2.y - n1.y)
        return (
          <line
            key={i}
            x1={n1.x}
            y1={n1.y}
            x2={n2.x}
            y2={n2.y}
            stroke="#C7A157"
            strokeWidth="1"
            strokeOpacity="0.55"
            strokeDasharray={len}
            strokeDashoffset={len}
            style={{
              animation: `draw 1.4s ease-out forwards`,
              animationDelay: `${0.15 * i}s`,
            }}
          />
        )
      })}

      {nodes.map((n, i) => (
        <g key={n.id}>
          <circle
            cx={n.x}
            cy={n.y}
            r={n.id === 'core' ? n.r : n.r}
            fill={n.id === 'core' ? '#B68D40' : '#F7F4EC'}
            opacity="0"
            style={{
              animation: `fadeIn 0.6s ease-out forwards`,
              animationDelay: `${0.15 * i + 0.4}s`,
            }}
          />
          {n.id === 'core' && (
            <circle
              cx={n.x}
              cy={n.y}
              r="16"
              stroke="#B68D40"
              strokeWidth="1"
              strokeOpacity="0.4"
              opacity="0"
              style={{ animation: 'fadeIn 0.8s ease-out forwards, pulse 3.5s ease-in-out 1.6s infinite', transformOrigin: `${n.x}px ${n.y}px` }}
            />
          )}
        </g>
      ))}

      <style>{`
        @keyframes draw { to { stroke-dashoffset: 0; } }
        @keyframes fadeIn { to { opacity: 1; } }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.35); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          line, circle { animation: none !important; opacity: 1 !important; stroke-dashoffset: 0 !important; }
        }
      `}</style>
    </svg>
  )
}
