import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import HomePage from "./home/home-page";
import QuizPage from "./quiz/quiz-page";
import AboutPage from "./about/about-page";
import DemoPage from "./demos/demo-page";
import PageHeader from "./common/page-header";
import PageFooter from "./common/page-footer";

// Components should be named as PascalCase.
// A (functional) component is just a JS function that returns JSX.

function App() {
  return (
    <BrowserRouter>
      <PageHeader></PageHeader>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/quiz">
          <QuizPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/demo">
          <DemoPage />
        </Route>
      </Switch>

      <PageFooter></PageFooter>
    </BrowserRouter>
  );
}

export default App;
