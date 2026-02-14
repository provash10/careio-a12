import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";


// import { services } from "../../route";
const servicesCollection=connect("services")

export async function GET(request,{params}) {
    const {id}=await params;

    if(id.length !=24){
        return Response.json({
            status: 400,
            message: "Send correct _id"
        })
    }
    // const signleServices=services.find(service=> service.id==id) || {};
    
    const query={_id:new ObjectId(id)};
    const result =await servicesCollection.findOne(query);

    if (!result) {
      return Response.json(
        { message: "Service not found" },
        { status: 404 }
      );
    }

    return Response.json(result);
}


//Delete
export async function DELETE(request,{params}) {
    const {id}=await params;

    if(id.length !=24){
        return Response.json({
            status: 400,
            message: "Send correct _id"
        })
    }
    // const signleServices=services.find(service=> service.id==id) || {};
    
    const query={_id:new ObjectId(id)};
    const result =await servicesCollection.deleteOne(query);

    if (!result) {
      return Response.json(
        { message: "Service not found" },
        { status: 404 }
      );
    }

    return Response.json(result);
}

//Update-Patch
export async function PATCH(request,{params}) {
    const {id}=await params;
    const {message} = await request.json();

    if(id.length !=24){
        return Response.json({
            status: 400,
            message: "Send correct _id"
        })
    }
    // const signleServices=services.find(service=> service.id==id) || {};
    if(!message ||typeof message !== "string"){
        return Response.json({
        status:400,
        message: "Please Send the message",
    })
    }

    const query={_id:new ObjectId(id)};
    // for patch
    const newData={
        $set:{
            message
        }
    }
    const result =await servicesCollection.updateOne(query,newData);

    if (!result) {
      return Response.json(
        { message: "Service not found" },
        { status: 404 }
      );
    }

    return Response.json(result);
}


