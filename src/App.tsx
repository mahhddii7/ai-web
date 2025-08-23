import AILandingHeader from "./component/AILandingHeader";
import { CommentSection } from "./component/Comments";
import { ComparingSection } from "./component/Comparing";
import { FeaturesSection } from "./component/Feature";
import { HowItWorksSection } from "./component/HowItWork";
import Footer from "./component/Footer";
function App() {
  return (
    <>
      <AILandingHeader />
      <FeaturesSection />
      <HowItWorksSection />
      <ComparingSection
        afterSrc="./public/image/laptop.jpg"
        beforeSrc="public/image/laptop 2.jpg"
      />
      <CommentSection />
      <Footer />
    </>
  );
}

export default App;
