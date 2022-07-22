import Header from "../components/Header/Header";
export default function Home() {
  return (
    <div className="relative h-screen bg-AAprimary w-full ">
      <Header />
      <div className="h-96  w-full"></div>
      <div className="h-96 bg-red-300 w-full"></div>
      <div className="h-96 bg-blue-300 w-full"></div>
      <div className="h-96 bg-yellow-500 w-full"></div>
      <div className="h-96 w-full"></div>
    </div>
  );
}
