import { useState } from "react";

const questions = [
  {
    id: 1,
    q: "¿Qué fue lo que más te gustó de la materia?",
    icon: "⭐",
    answer: "Lo que más me gustó fue el desarrollo de páginas web mediante HTML y CSS. Poder ver en tiempo real cómo los estilos y la estructura cobran forma en el navegador fue algo que me enganchó desde el principio, aunque a veces me complicaba bastante entender ciertos comportamientos del diseño. Con práctica fui perdiendo el miedo y disfrutando más el proceso.",
  },
  {
    id: 2,
    q: "¿Qué tema consideras que fue el más importante que aprendiste?",
    icon: "🧠",
    answer: "Considero que el tema más importante fue el uso de GitHub. Aprender a versionar el código, trabajar con ramas y colaborar en repositorios compartidos es una habilidad esencial en cualquier proyecto de desarrollo real. GitHub se convirtió en una herramienta que usaré siempre en mi carrera profesional.",
  },
  {
    id: 3,
    q: "¿Qué actividad o práctica recuerdas más y por qué?",
    icon: "💡",
    answer: "La actividad que más recuerdo es la realización de la ficha de presentación. Fue una de las primeras prácticas donde tuve que aplicar HTML y CSS de forma estructurada para crear algo con identidad propia. Me enseñó a organizar el contenido y a cuidar los detalles visuales desde el inicio.",
  },
  {
    id: 4,
    q: "¿Hubo algún tema que al principio te pareció complicado y luego lograste comprender?",
    icon: "🔓",
    answer: "Sí, el uso de colaboradores en GitHub al principio me pareció confuso. No entendía bien cómo gestionar los permisos, resolver conflictos de merge o coordinar el trabajo con otros compañeros en el mismo repositorio. Con la práctica lo fui comprendiendo y ahora me parece una de las habilidades más valiosas que aprendí.",
  },
  {
    id: 5,
    q: "¿Qué fue lo que más te llamó la atención durante el desarrollo de la materia?",
    icon: "🎯",
    answer: "Lo que más me llamó la atención fue el uso de HTML y CSS para la creación de páginas web. Me sorprendió la cantidad de cosas que se pueden lograr solo con esas dos tecnologías — desde layouts complejos hasta animaciones y diseños responsivos. Es increíble el poder que tienen cuando se combinan bien.",
  },
  {
    id: 6,
    q: "Menciona tres conocimientos o habilidades que adquiriste este semestre.",
    icon: "🛠️",
    answer: "1. El uso de Git y sus comandos principales — commit, push, pull, merge — para gestionar el historial del código de forma ordenada.\n2. El manejo de GitHub como plataforma de trabajo colaborativo, creando y gestionando repositorios.\n3. Trabajar con colaboradores en proyectos compartidos, coordinando ramas y resolviendo conflictos de versión.",
  },
  {
    id: 7,
    q: "Imagina que han pasado 4 años y ya eres Ingeniero(a) de Sistemas. Realiza un dibujo de cómo te ves en ese momento y escribe una breve descripción.",
    icon: "🚀",
    answer: "Me veo trabajando en una empresa de apuestas, desarrollando y manteniendo plataformas web de alto tráfico. Con una pantalla llena de dashboards en tiempo real, colaborando con un equipo técnico ágil y aportando soluciones que impactan a miles de usuarios. Un entorno dinámico, con retos constantes y tecnología de punta.",
    isDraw: true,
  },
  {
    id: 8,
    q: "¿De qué manera crees que podrás utilizar lo aprendido en tu futuro profesional?",
    icon: "🌐",
    answer: "Podré utilizar lo aprendido para crear páginas web y aplicaciones completas. Desde sitios informativos hasta plataformas interactivas con funcionalidades complejas. Los fundamentos de HTML, CSS, Git y el trabajo colaborativo me dan una base sólida para crecer como desarrollador y adaptarme a cualquier proyecto.",
  },
  {
    id: 9,
    q: "Si tuvieras que describir esta materia en una sola palabra, ¿cuál sería? Explica tu respuesta.",
    icon: "✍️",
    answer: "CREATIVA. Porque más allá de aprender tecnologías, la materia me invitó a expresarme, a diseñar con intención y a darle un estilo propio a cada proyecto. No hay una sola forma correcta de hacer las cosas — la creatividad es lo que diferencia un trabajo del otro.",
  },
  {
    id: 10,
    q: "¿Qué mensaje o recomendación le darías a los futuros estudiantes que cursen esta materia?",
    icon: "📣",
    answer: "Que practiquen todo lo que aprendan — la teoría sola no basta. Y que no tengan miedo de experimentar con su propio estilo: la imaginación no tiene límites, y cómo tú ves las cosas es tu mayor fortaleza. No copien el diseño de otros, desarrollen su propia identidad como creadores. Eso es lo que hace que tu trabajo se destaque.",
  },
];

const AvatarDrawing = () => (
  <svg viewBox="0 0 220 230" width="200" height="210" style={{ margin: "0 auto", display: "block" }}>
    <rect x="30" y="130" width="160" height="95" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
    <rect x="40" y="140" width="140" height="72" rx="4" fill="#0f172a" />
    <text x="55" y="158" fill="#f59e0b" fontSize="9" fontFamily="monospace" fontWeight="bold">🎰 LIVE BETS</text>
    <rect x="44" y="162" width="60" height="6" rx="2" fill="#16a34a" />
    <rect x="44" y="171" width="40" height="6" rx="2" fill="#dc2626" />
    <rect x="44" y="180" width="55" height="6" rx="2" fill="#16a34a" />
    <text x="112" y="170" fill="#34d399" fontSize="11" fontFamily="monospace">+$</text>
    <text x="112" y="183" fill="#f59e0b" fontSize="9" fontFamily="monospace">ODDS</text>
    <rect x="80" y="220" width="60" height="8" rx="2" fill="#334155" />
    <rect x="60" y="228" width="100" height="5" rx="2" fill="#475569" />
    <circle cx="110" cy="52" r="28" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
    <ellipse cx="110" cy="30" rx="26" ry="13" fill="#292524" />
    <circle cx="100" cy="52" r="4" fill="#1c1917" />
    <circle cx="120" cy="52" r="4" fill="#1c1917" />
    <circle cx="101.5" cy="50.5" r="1.5" fill="white" />
    <circle cx="121.5" cy="50.5" r="1.5" fill="white" />
    <path d="M 98 63 Q 110 72 122 63" stroke="#1c1917" strokeWidth="2" fill="none" strokeLinecap="round" />
    <rect x="80" y="79" width="60" height="55" rx="10" fill="#1e3a5f" />
    <polygon points="110,82 115,82 113,110 107,110" fill="#f59e0b" />
    <rect x="48" y="82" width="35" height="14" rx="7" fill="#1e3a5f" transform="rotate(-15,65,89)" />
    <rect x="137" y="82" width="35" height="14" rx="7" fill="#1e3a5f" transform="rotate(15,155,89)" />
    <ellipse cx="110" cy="27" rx="30" ry="5" fill="#0c4a6e" />
    <rect x="92" y="14" width="36" height="14" rx="4" fill="#0c4a6e" />
    <text x="100" y="25" fill="#f59e0b" fontSize="9" fontWeight="bold">ING</text>
    <rect x="158" y="100" width="18" height="18" rx="3" fill="#7c3aed" stroke="#a78bfa" strokeWidth="1" />
    <circle cx="162" cy="104" r="1.5" fill="white" />
    <circle cx="170" cy="104" r="1.5" fill="white" />
    <circle cx="166" cy="109" r="1.5" fill="white" />
    <circle cx="162" cy="114" r="1.5" fill="white" />
    <circle cx="170" cy="114" r="1.5" fill="white" />
  </svg>
);

export default function App() {
  const [open, setOpen] = useState(null);
  const [visited, setVisited] = useState(new Set());

  const toggle = (id) => {
    setOpen(open === id ? null : id);
    setVisited((v) => new Set([...v, id]));
  };

  const progress = Math.round((visited.size / questions.length) * 100);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      color: "#e2e8f0",
      padding: "0 0 60px 0",
    }}>
      <header style={{
        background: "rgba(99,102,241,0.15)",
        borderBottom: "1px solid rgba(99,102,241,0.4)",
        backdropFilter: "blur(12px)",
        padding: "24px 20px",
        textAlign: "center",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        <p style={{ margin: 0, fontSize: 11, letterSpacing: 3, color: "#a5b4fc", textTransform: "uppercase" }}>
          Universidad • Práctica Recuperatorio
        </p>
        <h1 style={{
          margin: "6px 0 4px",
          fontSize: "clamp(1.4rem, 5vw, 2rem)",
          fontWeight: 800,
          background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Reflexión de Fin de Semestre
        </h1>
        <p style={{ margin: 0, fontSize: 13, color: "#94a3b8" }}>
          Alex Sander Lopez Orcko &nbsp;·&nbsp; 23/06/2026
        </p>
        <div style={{ marginTop: 14, maxWidth: 340, margin: "14px auto 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#94a3b8", marginBottom: 5 }}>
            <span>Progreso</span>
            <span>{visited.size}/{questions.length} respondidas</span>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 99, height: 6 }}>
            <div style={{
              width: `${progress}%`,
              height: "100%",
              borderRadius: 99,
              background: "linear-gradient(90deg, #818cf8, #34d399)",
              transition: "width 0.4s ease",
            }} />
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 680, margin: "0 auto", padding: "28px 16px 0" }}>
        {questions.map((q, i) => {
          const isOpen = open === q.id;
          const isVisited = visited.has(q.id);
          return (
            <div
              key={q.id}
              onClick={() => toggle(q.id)}
              style={{
                background: isOpen
                  ? "rgba(99,102,241,0.18)"
                  : isVisited
                    ? "rgba(52,211,153,0.07)"
                    : "rgba(255,255,255,0.04)",
                border: `1px solid ${isOpen ? "rgba(99,102,241,0.6)" : isVisited ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.08)"}`,
                borderRadius: 14,
                marginBottom: 12,
                cursor: "pointer",
                transition: "all 0.25s ease",
                overflow: "hidden",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 18px" }}>
                <span style={{
                  fontSize: 22,
                  flexShrink: 0,
                  filter: isOpen ? "none" : "grayscale(0.3)",
                }}>{q.icon}</span>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: 10, color: isVisited ? "#34d399" : "#64748b", fontWeight: 600, letterSpacing: 1 }}>
                    PREGUNTA {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ margin: "2px 0 0", fontSize: 14, fontWeight: 600, color: isOpen ? "#c7d2fe" : "#cbd5e1", lineHeight: 1.4 }}>
                    {q.q}
                  </p>
                </div>
                <span style={{
                  fontSize: 18,
                  color: "#6366f1",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s",
                  flexShrink: 0,
                }}>▾</span>
              </div>

              {isOpen && (
                <div style={{
                  borderTop: "1px solid rgba(99,102,241,0.25)",
                  padding: "18px 18px 20px",
                  animation: "fadeIn 0.2s ease",
                }}>
                  {q.isDraw && (
                    <div style={{
                      background: "rgba(15,23,42,0.7)",
                      borderRadius: 12,
                      padding: "16px",
                      marginBottom: 14,
                      border: "1px dashed rgba(99,102,241,0.4)",
                    }}>
                      <p style={{ textAlign: "center", fontSize: 11, color: "#6366f1", margin: "0 0 10px", letterSpacing: 1 }}>
                        ✏️ DIBUJO — YO EN 4 AÑOS
                      </p>
                      <AvatarDrawing />
                    </div>
                  )}
                  <p style={{
                    margin: 0,
                    fontSize: 14,
                    color: "#cbd5e1",
                    lineHeight: 1.75,
                    whiteSpace: "pre-line",
                  }}>
                    {q.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {visited.size === questions.length && (
          <div style={{
            marginTop: 24,
            padding: "24px",
            borderRadius: 16,
            background: "linear-gradient(135deg, rgba(52,211,153,0.15), rgba(99,102,241,0.15))",
            border: "1px solid rgba(52,211,153,0.4)",
            textAlign: "center",
            animation: "fadeIn 0.4s ease",
          }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>🎓</div>
            <h3 style={{ margin: "0 0 6px", color: "#34d399", fontSize: 18 }}>¡Práctica Completada!</h3>
            <p style={{ margin: 0, color: "#94a3b8", fontSize: 13 }}>
              Todas las preguntas respondidas. Gracias por la materia, Ing. Choque Matos.
            </p>
          </div>
        )}
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
