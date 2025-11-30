import AdviceButton from "../AdviceButton";
import AdviceNumber from "../AdviceNumber";
import AdviceText from "../AdviceText";
import css from "./index.module.scss";

export default function AdviceGenerator() {
    return (
        <div className={css.container}>
            <div className={css.card}>
                <AdviceNumber number={0} />
                <AdviceText text={"Lorem ipsum dolor sigma gigachad."} />

                <hr />

                <AdviceButton />
            </div>
        </div>
    );
}
