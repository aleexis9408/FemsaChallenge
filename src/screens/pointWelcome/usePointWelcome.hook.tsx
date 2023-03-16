import {useEffect, useMemo} from 'react';
import {Product, usePoins} from '../../services/usePoints';

export const usePointWelcome = (): ResponseHook => {
  const [getData, {isLoading, isError, data}] = usePoins();

  useEffect(() => {
    getData();
  }, []);

  const totalPoints = useMemo(() => {
    let total = 0;
    if (!isLoading && data) {
      total = data?.reduce((valor: number, {points}) => {
        return valor + points ?? 0;
      }, 0);
    }
    return total;
  }, [data, isLoading]);

  return {totalPoints, isLoading, isError, data};
};

interface ResponseHook {
  totalPoints: number;
  isLoading: boolean;
  isError: boolean;
  data: Product[];
}
