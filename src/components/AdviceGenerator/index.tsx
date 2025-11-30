import AdviceNumber from "../AdviceNumber";
import css from "./index.module.scss";

export default function AdviceGenerator() {
    return (
        <div className={css.container}>
            <div className={css.card}>
                <AdviceNumber number={117} />
            </div>
        </div>
    );
}
