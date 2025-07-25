import TopBar from './components/topbar/index'
import Information from './components/information/index'

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <TopBar />
        <Information />
      </div>
    </>
  );
}
