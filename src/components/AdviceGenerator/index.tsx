import AdviceButton from "../AdviceButton";
import AdviceNumber from "../AdviceNumber";
import AdviceText from "../AdviceText";
import css from "./index.module.scss";
import type { AdviceSlipProps } from "../../libs/types";
import { useFetch } from "../../libs/hooks";
import { ADVICE_SLIP_API_URL } from "../../libs/constants";

export default function AdviceGenerator() {
    const { data, isLoading } = useFetch<AdviceSlipProps>(ADVICE_SLIP_API_URL);

    return (
        <div className={css.container}>
            <div className={css.card}>
                <div className={css.content}>
                    {isLoading && <p>Loading...</p>}

                    {data && (
                        <>
                            <AdviceNumber number={data.slip.id} />
                            <AdviceText text={data.slip.advice} />
                        </>
                    )}
                </div>

                <hr className={css.divider} />

                <AdviceButton />
            </div>
        </div>
    );
}
