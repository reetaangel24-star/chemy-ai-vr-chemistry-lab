import Button from "./components/ui/Button/Button";

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 text-center max-w-md">
        <h1 className="text-5xl font-bold text-cyan-400 mb-4">
          Chemy
        </h1>

        <p className="text-slate-300 mb-8">
          AI Powered VR Chemistry Lab
        </p>

        <Button>
          Enter Laboratory
        </Button>
      </div>
    </main>
  );
}

export default App;