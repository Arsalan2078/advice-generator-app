import css from "./index.module.scss";

type Props = {
    number: number;
};

export default function AdviceNumber({ number }: Props) {
    return <div className={css.number}>Advice #{number}</div>;
}
