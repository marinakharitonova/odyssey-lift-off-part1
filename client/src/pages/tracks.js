import React from 'react';
import {Layout, QueryResult} from '../components';
import {gql, useQuery} from "@apollo/client";
import TrackCard from "../containers/track-card";

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const TRACKS = gql`
    query GetTracks {
        tracksForHome {
            id
            author {
                name
                id
                photo

            }
            title
            thumbnail
            length
            modulesCount
        }
    }
`;

const Tracks = () => {
    const {loading, error, data} = useQuery(TRACKS);

    return (
        <Layout grid>
            <QueryResult data={data} error={error} loading={loading}>
                {data?.tracksForHome?.map(track => <TrackCard key={track.id} track={track}/>)}
            </QueryResult>
        </Layout>
    )
};

export default Tracks;
