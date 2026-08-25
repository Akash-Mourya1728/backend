import mongoose ,{Schema} from "mongoose";
const videoSchema = new Schema(
    {
        videofile:{
            type : String, //claudanry 
            required: true,
        },
        thumbnail:{
            type: String, //claudanry
            required: true, 
        },
        title:{
            type:String,
            required:true,
        },
        description:{
            type: String, 
            required:true
        },
        duration:{
            type:Number,
            required:true, 
        },
        view:
            {
                type:Number,
                default: 0
            },
        Ispublished:{
            type : Boolean,
            default: true
        },
        owern:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }

    },{
        timestamps: true
    }
)

export const Video = mongoose.model("Video", videoSchema)