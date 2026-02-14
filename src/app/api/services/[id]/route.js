import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";


// import { services } from "../../route";
// const servicesCollection = connect("services")

//GetOne
// export async function GET(request,{params}) {
//     const {id}=await params;

//     if(id.length !=24){
//         return Response.json({
//             status: 400,
//             message: "Send correct _id"
//         })
//     }
//     // const signleServices=services.find(service=> service.id==id) || {};

//     const query={_id:new ObjectId(id)};
//     const result =await servicesCollection.findOne(query);

//     if (!result) {
//       return Response.json(
//         { message: "Service not found" },
//         { status: 404 }
//       );
//     }

//     return Response.json(result);
// }


export async function GET(request, { params }) {
  const { id } = await params;

  if (!id || id.length !== 24) {
    return Response.json({ message: "Invalid ID format" }, { status: 400 });
  }

  try {
    const servicesCollection = await connect("services");
    const service = await servicesCollection.findOne({ _id: new ObjectId(id) });

    if (!service) {
      return Response.json({ message: "Service not found" }, { status: 404 });
    }

    return Response.json(service);
  } catch (error) {
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;

  if (!id || id.length !== 24) {
    return Response.json({ message: "Invalid ID format" }, { status: 400 });
  }

  try {
    const servicesCollection = await connect("services");
    const result = await servicesCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return Response.json({ message: "Service not found" }, { status: 404 });
    }

    return Response.json({ message: "Deleted successfully", result });
  } catch (error) {
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  const { message } = await request.json();

  if (!id || id.length !== 24) {
    return Response.json({ message: "Invalid ID format" }, { status: 400 });
  }

  if (!message || typeof message !== "string") {
    return Response.json({ message: "Message is required" }, { status: 400 });
  }

  try {
    const servicesCollection = await connect("services");
    const result = await servicesCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { message } }
    );

    if (result.matchedCount === 0) {
      return Response.json({ message: "Service not found" }, { status: 404 });
    }

    return Response.json({ message: "Updated successfully", result });
  } catch (error) {
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
