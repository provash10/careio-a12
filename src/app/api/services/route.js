import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
// import { services } from "../route";
const servicesCollection = connect("services");

export async function GET(request) {

    // const servicesCollection = connect("services");
    const result =await servicesCollection.find().toArray();

    // return Response.json(services)
    return Response.json(result);
}


//POST
// export async function POST(request) {

//     const {message} = await request.json();
    
//     if(!message ||typeof message !== "string"){
//         return Response.json({
//         status:400,
//         message: "Please Send the message",
//     })
//     }

//     // const newServices = {message, id:services.length +1};
//     const newServices = {message, date:new Date().toISOString()};
//     // services.push(newServices); no need
//     const result = await servicesCollection.insertOne(newServices);

//     return Response.json(result);
// }

export async function POST(request) {
  const body = await request.json();

  const { name, price, image, description } = body;

  if (!name || !price || !image || !description) {
    return Response.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  const newService = {
    name,
    price: Number(price),
    image,
    description,
    createdAt: new Date(),
  };

  const result = await servicesCollection.insertOne(newService);

  return Response.json(result);
}

