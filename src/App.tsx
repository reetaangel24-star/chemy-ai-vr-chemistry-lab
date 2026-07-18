import Button from "./components/ui/Button/Button";
import Card from "./components/ui/Card/Card";
import Input from "./components/ui/Input/Input";
import Typography from "./components/ui/Typography/Typography";

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <Card className="max-w-md w-full text-center">

        <Typography
          title="Chemy"
          subtitle="AI Powered VR Chemistry Lab"
        />

        <div className="mt-8 space-y-4">

          <Input placeholder="Enter Email" />

          <Input
            placeholder="Enter Password"
            type="password"
          />

          <Button className="w-full">
            Enter Laboratory
          </Button>

        </div>

      </Card>
    </main>
  );
}

export default App;