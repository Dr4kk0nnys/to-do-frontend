import { IFetchParameters, IFetchReturn } from 'interfaces/FetchParameters';

import { sessionCheck } from 'utils/session';

const doFetch = async({ url, method, body }: IFetchParameters): Promise<IFetchReturn> => {
    const rawResponse = await fetch('https://to-do-list-backend-dr4kk0nnys.herokuapp.com/' + url, {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    const content = await rawResponse.json();
    sessionCheck(content);

    return content;
}

export { doFetch };