import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
// import { services } from "../route";
export async function GET(request) {
  const servicesCollection = await connect("services");
  const result = await servicesCollection.find().toArray();
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
  try {
    const body = await request.json();
    const {
      name,
      shortDescription,
      description,
      pricePerHour,
      pricePerDay,
      image,
      rating,
      gallery,
      features,
      availability,
      faq
    } = body;

    if (!name || !pricePerHour || !image || !description) {
      return Response.json(
        { message: "Basic fields (name, pricePerHour, image, description) are required" },
        { status: 400 }
      );
    }

    const newService = {
      name,
      shortDescription,
      description,
      pricePerHour: Number(pricePerHour),
      pricePerDay: Number(pricePerDay),
      image,
      rating: Number(rating),
      gallery: Array.isArray(gallery) ? gallery : [],
      features: Array.isArray(features) ? features : [],
      availability: availability || "Available",
      faq: Array.isArray(faq) ? faq : [],
      createdAt: new Date(),
    };

    const servicesCollection = await connect("services");
    const result = await servicesCollection.insertOne(newService);

    return Response.json(result);
  } catch (error) {
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

