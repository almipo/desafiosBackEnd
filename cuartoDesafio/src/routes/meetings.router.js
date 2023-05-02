import { Router } from "express";
import MeetingsManager from "../managers/MeetingsManager.js";


const router = Router()
const meetingsService= new MeetingsManager();

router.get('/', async(req, res)=>{
    try{
    const meetings = await meetingsService.getmeetings()
    res.send({status:'succes', payload:meetings})
    }catch(error){
        res
        .status(500)
        .send({status:"error", error:"error al obtener el meetings"})
    }
})

router.post('/', async(req, res)=>{
    const{title, hour, status}=req.body
    if(!title||!hour||!status){
        return res.status(400).send({status:"error0", error:"valores incompletos"})
    }
    const meeting = {
        title,
        hour,
        status
    }
    const result = await meetingsService.createMeeting(meeting);
    const meetings = await meetingsService.getMeettings()
    req.io.emit('meetings', meetings)
    res.status(201).send({status:"succes", payload:result})
})


router.delete('/:mid',async(req, res)=>{
   
    const meetings = await meetingsService.getMeetings()
    req.io.emit('meetings', meetings)
})


export default router