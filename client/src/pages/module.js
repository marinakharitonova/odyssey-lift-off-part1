import React from 'react';
import {gql, useQuery} from "@apollo/client";
import {Layout, QueryResult} from "../components";
import ModuleDetail from "../components/module-detail";

/** GET_MODULE_AND_PARENT_TRACK gql query to retrieve a specific module by its ID and its parent track by its id */
export const GET_MODULE_AND_PARENT_TRACK = gql`
    query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
        module(id: $moduleId) {
            id
            title
            content
            videoUrl
        }
        track(id: $trackId) {
            id
            title
            modules {
                id
                title
                length
            }
        }
    }
`
/**
 * Module Page fetches a module's data and its parent track data
 * from the gql query GET_MODULE_AND_PARENT_TRACK
 * and provides both to the ModuleDetail component to display
 */
const Module = ({moduleId, trackId}) => {
    const {loading, error, data} = useQuery(GET_MODULE_AND_PARENT_TRACK, {
        variables: {moduleId, trackId},
    });

    return (
        <Layout fullWidth={true}>
            <QueryResult error={error} loading={loading} data={data}>
                <ModuleDetail module={data?.module} track={data?.track}/>
            </QueryResult>
        </Layout>
    )
};


export default Module