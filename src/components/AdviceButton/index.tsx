import css from "./index.module.scss";
import image from "/images/icon-dice.svg";

type Props = {
    onClick?: () => void;
};

export default function AdviceButton({ onClick }: Props) {
    return (
        <button className={css.button} onClick={onClick}>
            <img
                src={image}
                width="24"
                height="24"
                alt="An icon of a dice. The sole visible side has 5 pips on it."
            />
        </button>
    );
}
