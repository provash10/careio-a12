import { connect } from "@/app/lib/dbConnect";
// import { services } from "../route";
const servicesCollection = connect("services");

export async function GET(request) {

    // const servicesCollection = connect("services");
    const result =await servicesCollection.find().toArray();

    // return Response.json(services)
    return Response.json(result);
}


export async function POST(request) {

    const {message} = await request.json();
    
    if(!message ||typeof message !== "string"){
        return Response.json({
        status:400,
        message: "Please Send the message",
    })
    }

    // const newServices = {message, id:services.length +1};
    const newServices = {message, date:new Date().toISOString()};
    // services.push(newServices); no need
    const result = await servicesCollection.insertOne(newServices);

    return Response.json(result);
}
