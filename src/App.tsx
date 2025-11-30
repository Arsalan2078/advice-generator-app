import css from "./App.module.scss";
import AdviceGenerator from "./components/AdviceGenerator";

export default function App() {
    return (
        <main className={css.app}>
            <h1>Advice Generator App</h1>

            <AdviceGenerator />
        </main>
    );
}
