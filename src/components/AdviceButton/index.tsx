import css from "./index.module.scss";
import image from "/images/icon-dice.svg";

type Props = {
    onClick?: () => void;
    disabled: boolean;
};

export default function AdviceButton({ onClick, disabled }: Props) {
    return (
        <button className={css.button} onClick={onClick} disabled={disabled}>
            <img
                src={image}
                width="24"
                height="24"
                alt="An icon of a dice. The sole visible side has 5 pips on it."
            />
        </button>
    );
}
