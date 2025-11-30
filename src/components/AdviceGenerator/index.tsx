import AdviceButton from "../AdviceButton";
import AdviceNumber from "../AdviceNumber";
import AdviceText from "../AdviceText";
import css from "./index.module.scss";

export default function AdviceGenerator() {
    return (
        <div className={css.container}>
            <div className={css.card}>
                <div className={css.content}>
                    <AdviceNumber number={117} />
                    <AdviceText
                        text={
                            "It is easy to sit up and take notice, what's difficult is getting up and taking action."
                        }
                    />
                </div>

                <hr className={css.divider} />

                <AdviceButton />
            </div>
        </div>
    );
}
