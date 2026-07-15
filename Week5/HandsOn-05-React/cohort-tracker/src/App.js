import CohortDetails from "./components/CohortDetails";

function App() {
  return (
    <div>
      <h1>Cohort Dashboard</h1>

      <CohortDetails
        title="React Development"
        startedOn="10-Feb-2025"
        status="ongoing"
        coach="John"
        trainer="Alice"
      />

      <CohortDetails
        title="Java Full Stack"
        startedOn="15-Jan-2025"
        status="completed"
        coach="David"
        trainer="Bob"
      />

      <CohortDetails
        title="Angular"
        startedOn="05-Mar-2025"
        status="ongoing"
        coach="Chris"
        trainer="Emma"
      />
    </div>
  );
}

export default App;