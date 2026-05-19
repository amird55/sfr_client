import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {AddLang, GetAllLangs} from "./apiLang";

function useAddLang() {
    const queryClient = useQueryClient();

    const {isLoading:isAdding, mutate:addLang} = useMutation(
        {
            mutationFn: AddLang,
            onError: async (err) => {
                console.log("err", err)
            },
            onSuccess: ()=>{
                queryClient.invalidateQueries({
                    queryKey: ['allLangs'],
                })
            },
        }
    );

    return {isAdding, addLang};
}

function useGetLangs() {
    const query = useQuery({
        queryKey: ['allLangs'],
        queryFn: () => GetAllLangs(),
        staleTime: 5 * 60 * 1000, // Consider data stale after 10 minutes
        gcTime: 5 * 60 * 1000, // Keep data in cache for 20 minutes
        retry: (failureCount, error) => {
            return failureCount < 3;
        }
    });
    return query;
}

export {useGetLangs, useAddLang};