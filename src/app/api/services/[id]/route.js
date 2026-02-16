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


//Delete
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
//Update
export async function PATCH(request, { params }) {
  try {
    const { id } = await params;

    if (!id || id.length !== 24) {
      return Response.json({ message: "Invalid ID format" }, { status: 400 });
    }

    const body = await request.json();
    const servicesCollection = await connect("services");

    // Create an update object with only provided fields
    const updateData = {};
    const fields = [
      "name", "shortDescription", "description", "image",
      "availability", "gallery", "features", "faq", "discountPercentage"
    ];

    fields.forEach(field => {
      if (body[field] !== undefined) {
        updateData[field] = body[field];
      }
    });

    // Handle numeric fields separately to ensure 0 is not treated as falsy
    if (body.pricePerHour !== undefined) updateData.pricePerHour = Number(body.pricePerHour);
    if (body.pricePerDay !== undefined) updateData.pricePerDay = Number(body.pricePerDay);
    if (body.rating !== undefined) updateData.rating = Number(body.rating);
    if (body.discountPercentage !== undefined) updateData.discountPercentage = Number(body.discountPercentage);

    if (Object.keys(updateData).length === 0) {
      return Response.json({ message: "No fields to update" }, { status: 400 });
    }

    const result = await servicesCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return Response.json({ message: "Service not found" }, { status: 404 });
    }

    return Response.json({
      message: "Updated successfully",
      modifiedCount: result.modifiedCount
    });
  } catch (error) {
    console.error("PATCH Update Error:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
