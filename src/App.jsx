import { XFollowCard } from "./XFollowCard.jsx";
import "./App.css";

const users = [
  {
    name: "Casa del Rey",
    userName: "icasadelrey",
    isFollowing: true,
  },
  {
    name: "El Ministerio Roka",
    userName: "RokaStereoOficial",
    isFollowing: false,
  },
  {
    name: "NxtWave",
    userName: "NxtWaveBand",
    isFollowing: true,
  },
];

export function App() {
  return (
    <section className="follow-card-container">
      {users.map(({ name, userName, isFollowing }) => (
        <XFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </XFollowCard>
      ))}
    </section>
  );
}
