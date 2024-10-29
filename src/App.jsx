import { XFollowCard } from "./XFollowCard.jsx";
import "./App.css";

export function App() {
  return (
    <section className="follow-card-container">
      <XFollowCard userName="icasadelrey" initialIsFollowing>
        Casa del Rey
      </XFollowCard>
      <XFollowCard userName="RokaStereoOficial" initialIsFollowing={false}>
        El Ministerio Roka
      </XFollowCard>
      <XFollowCard userName="NxtWaveBand" initialIsFollowing>
        NxtWave
      </XFollowCard>
    </section>
  );
}
