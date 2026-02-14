import { services } from "../../route";

export async function GET(request,{params}) {
    const {id}=await params;

    const signleServices=services.find(service=> service.id==id) || {};

    return Response.json(signleServices);
}

