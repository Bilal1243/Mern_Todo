import { apiSlice } from "./apiSlice";


const todoApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => ({
                url: '/api/todo/getTodos'
            })
        })
    })
})

export const {
    useGetTodosQuery
} = todoApiSlice