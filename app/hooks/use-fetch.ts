"use client";

import { useEffect, useState } from "react";

import { delay } from "@app/lib/utils";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    fetch(url, { signal: controller.signal })
      .then(async (res) => {
        const data = await res.json();
        await delay(1000);

        setData(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
};

export { useFetch };
