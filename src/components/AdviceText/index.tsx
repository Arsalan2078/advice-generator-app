import css from "./index.module.scss";

type Props = {
    text: string;
};

export default function AdviceText({ text }: Props) {
    return <blockquote className={css.text}>{text}</blockquote>;
}
