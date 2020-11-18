import { useEffect, useState } from 'react';
import req from '../utils/request';

const useData = <T>(endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await req(endpoint, query);
        const { data: dataRes } = res;

        setData(dataRes);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
