import axios from 'axios';
import { Participant } from 'types/participant';
// https://data.directory.openbankingbrasil.org.br/participants



function DTOParticipant(data:any) : Participant{
    return {
        logo_url: data.AuthorisationServers[0]?.CustomerFriendlyLogoUri || null,
        name: data.AuthorisationServers.CustomerFriendlyName || data.OrganisationName,
        id: data?.OrganisationId || data.OrganisationDetails?.OrganisationId,
        api: data?.AuthorisationServers[0]?.ApiResources[0]?.ApiDiscoveryEndpoints[0]?.ApiEndpoint || null
    }
}

export class OpenFinance {
    public async getParticipants(): Promise<any>{
        const urlParticipants = "https://data.directory.openbankingbrasil.org.br/participants";
        const p = axios.get(urlParticipants).then(res=>res.data.map(DTOParticipant));
        return p;
    }
}