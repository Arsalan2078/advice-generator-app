import AdviceButton from "../AdviceButton";
import AdviceNumber from "../AdviceNumber";
import AdviceText from "../AdviceText";
import css from "./index.module.scss";
import type { AdviceSlipProps } from "../../libs/types";
import { ADVICE_SLIP_API_URL } from "../../libs/constants";
import { useEffect, useState } from "react";

export default function AdviceGenerator() {
    const [data, setData] = useState<AdviceSlipProps | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    console.log({ data, isLoading, error });

    async function getData() {
        setIsLoading(true);

        try {
            const response = await fetch(ADVICE_SLIP_API_URL);
            const result = await response.json();
            setData(result);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
                console.error(error);
            }
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={css.container}>
            <div className={css.card}>
                <div className={css.content}>
                    {isLoading && <p>Loading...</p>}
                    {error && (
                        <p className={css.error}>
                            Failed to load advice. Please try again.
                        </p>
                    )}

                    {isLoading === false && data && (
                        <>
                            <AdviceNumber number={data.slip.id} />
                            <AdviceText text={data.slip.advice} />
                        </>
                    )}
                </div>

                <hr className={css.divider} />

                <AdviceButton onClick={() => getData()} disabled={isLoading} />
            </div>
        </div>
    );
}
