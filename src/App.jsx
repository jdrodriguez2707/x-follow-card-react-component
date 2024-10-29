import { XFollowCard } from "./XFollowCard.jsx";
import "./App.css";

export function App() {
  return (
    <section className="follow-card-container">
      <XFollowCard userName="icasadelrey" isFollowing>
        Casa del Rey
      </XFollowCard>
      <XFollowCard userName="RokaStereoOficial" isFollowing>
        El Ministerio Roka
      </XFollowCard>
      <XFollowCard userName="NxtWaveBand" isFollowing>
        NxtWave
      </XFollowCard>
    </section>
  );
}
