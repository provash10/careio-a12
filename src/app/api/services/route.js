import { services } from "../route";

export async function GET(request) {
    return Response.json(services)
}


export async function POST(request) {

    const {message} = await request.json();
    if(!message ||typeof message !== "string"){
        return Response.json({
        status:400,
        message: "Please Send the message",
    })
    }

    const newServices = {message, id:services.length +1};
    services.push(newServices);

    return Response.json({
        acknowledged:true,
        insertedId: newServices.id
    })
}
