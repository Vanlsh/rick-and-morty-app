import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {CharacterModel} from "./Character";
interface IResult{
    id: number
    name: string
    species: string
    gender: string
    location: {
        name: string
    }
    status: string
    created: string
    like: boolean
    image: string | null
    episode: string []
}

interface IResponse {
    info: {
        count: number
        next: string | null
        pages: 42
        prev: string | null
    }
    results: IResult []
}
export const characterAPI = createApi({
    reducerPath: 'characterAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/api'
    }),
    tagTypes: ["Character"],
    endpoints: (build) => ({
        fetchAllCharacters: build.query<IResponse,string>({
            query: () => ({
                url: '/character',
            }),
            providesTags: result => ["Character"]
        }),
        fetchLocation:  build.query<any,number>({
            query: (id) => ({
                url: `/location/${id}`,
            })
        }),
        fetchEpisode:  build.query<any, number []>({
            query: (arrayOfId) => ({

                url: `/episode/${arrayOfId}`,
            })
        }),
        // fetch: build.query<CharacterModel,number | null>({
        //     query: (id) => ({
        //         url: `/character/${id}`,
        //     })
        // }),
    })
})